package org.project.startup.api.config;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.fasterxml.jackson.datatype.hibernate5.Hibernate5Module;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurationSupport;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.ImplicitGrantBuilder;
import springfox.documentation.builders.OAuthBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.service.*;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger.web.ApiKeyVehicle;
import springfox.documentation.swagger.web.SecurityConfiguration;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import java.util.List;

import static com.google.common.collect.Lists.newArrayList;

@Configuration
@EnableSwagger2
public class SwaggerConfig  extends WebMvcConfigurationSupport {

	@Bean
	public Docket startupApi() {
		return new Docket(DocumentationType.SWAGGER_2).groupName("startup-api")
				.apiInfo(apiInfo()).select().paths(PathSelectors.any()).build();
		/*
		 * .securitySchemes(newArrayList(oauth()))
		 * .securityContexts(newArrayList(securityContext()));
		 */
	}

	@Override
	protected void extendMessageConverters(List<HttpMessageConverter<?>> converters) {
		for (HttpMessageConverter<?> converter : converters) {
			if (converter instanceof MappingJackson2HttpMessageConverter) {
				MappingJackson2HttpMessageConverter jacksonConverter = (MappingJackson2HttpMessageConverter) converter;
				ObjectMapper objectMapper = jacksonConverter.getObjectMapper();

				//--- register hibernateModule in MappingJackson2HttpMessageConverter.objectMapper
				objectMapper.registerModule(new Hibernate5Module());

				//--- other configurations
				jacksonConverter.setPrettyPrint(true);
				objectMapper.disable(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS);
				objectMapper.enable(SerializationFeature.INDENT_OUTPUT);
			}
		}
	}

	private ApiInfo apiInfo() {
		return new ApiInfoBuilder().title("A start-up application using the spring mvc").description(
				"Please modify this API accordingly to the projects")
				.termsOfServiceUrl(
						"https://github.com/ovidiubrunet/startup-springmvc")
				.contact("Dragoi Ovidiu").license("Start-Up Group")
				.licenseUrl(
						"https://github.com/ovidiubrunet/startup-springmvc")
				.version("1.0").build();
	}

	@Bean
	public SecurityConfiguration securityInfo() {
		return new SecurityConfiguration("abc", "123", "some", "coin", "123", ApiKeyVehicle.HEADER, "", ",");
	}

	@Bean
	SecurityScheme oauth() {
		return new OAuthBuilder().name("petstore_auth").grantTypes(grantTypes()).scopes(scopes()).build();
	}

	private List<AuthorizationScope> scopes() {
		return newArrayList(new AuthorizationScope("write:pets", "modify projects in your account"),
				new AuthorizationScope("read:pets", "read your projects"));
	}

	private List<GrantType> grantTypes() {
		GrantType grantType = new ImplicitGrantBuilder()
				.loginEndpoint(new LoginEndpoint("http://petstore.swagger.io/api/oauth/dialog")).build();
		return newArrayList(grantType);
	}
	
	@Override
    protected void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("swagger-ui.html")
                .addResourceLocations("classpath:/META-INF/resources/");

        registry.addResourceHandler("/webjars/**")
                .addResourceLocations("classpath:/META-INF/resources/webjars/");
    }
}
