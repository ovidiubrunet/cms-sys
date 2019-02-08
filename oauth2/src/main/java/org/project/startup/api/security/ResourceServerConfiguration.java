package org.project.startup.api.security;

import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;
import org.springframework.security.oauth2.config.annotation.web.configuration.ResourceServerConfigurerAdapter;
import org.springframework.security.oauth2.config.annotation.web.configurers.ResourceServerSecurityConfigurer;
import org.springframework.security.oauth2.provider.error.OAuth2AccessDeniedHandler;

/**
 * Resource Server.
 * 
 * @author ovidiu.dragoi
 *
 */
@Configuration
@EnableResourceServer
public class ResourceServerConfiguration extends ResourceServerConfigurerAdapter {

	private static final String RESOURCE_ID = "cronos_manager_rest_api";

	@Override
	public void configure(ResourceServerSecurityConfigurer resources) {
		resources.resourceId(RESOURCE_ID).stateless(false);
	}

	@Override
	public void configure(HttpSecurity http) throws Exception {
		// user -> role -> privilege(authority) : READ , CREATE, EDIT , DELETE
		// assign role to client, then assign privilege (authority) to role
		http.anonymous().disable().requestMatchers().antMatchers("/api/secure/**").and().authorizeRequests()
				// .antMatchers("/api/**").access("hasRole('ADMIN')")
				.antMatchers(HttpMethod.PUT, "/api/secure/user/\\d+").hasAnyAuthority("EDIT")
				.antMatchers(HttpMethod.DELETE, "/api/secure/user/\\d+").hasAnyAuthority("DELETE")
				.antMatchers(HttpMethod.GET, "/api/secure/user/\\d+").hasAnyAuthority("READ")
				.antMatchers(HttpMethod.GET, "/api/secure/users").hasAnyAuthority("READ")
				.antMatchers(HttpMethod.POST, "/api/secure/users").hasAnyAuthority("CREATE")
				.antMatchers(HttpMethod.GET, "/api/secure/test-privilege-read").hasAnyAuthority("READ")
				.antMatchers(HttpMethod.GET, "/api/secure/test-privilege-create").hasAnyAuthority("CREATE")
				.antMatchers(HttpMethod.GET, "/api/secure/test-privilege-edit").hasAnyAuthority("EDIT")
				.antMatchers(HttpMethod.GET, "/api/secure/test-privilege-delete").hasAnyAuthority("DELETE").and()
				.exceptionHandling().accessDeniedHandler(new OAuth2AccessDeniedHandler());
	}

}