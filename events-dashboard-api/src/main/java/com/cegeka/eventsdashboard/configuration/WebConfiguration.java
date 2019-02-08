package com.cegeka.eventsdashboard.configuration;

import com.cegeka.eventsdashboard.service.Oauth2;

import com.cegeka.eventsdashboard.web.admin.handler.*;
import com.cegeka.eventsdashboard.web.admin.router.*;
import com.cegeka.eventsdashboard.web.guest.handler.GuestPostHandler;
import com.cegeka.eventsdashboard.web.guest.router.GuestPostRouter;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.web.embedded.netty.NettyReactiveWebServerFactory;
import org.springframework.boot.web.reactive.server.ReactiveWebServerFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.core.env.Environment;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.http.*;
import org.springframework.http.server.reactive.HttpHandler;
import org.springframework.validation.beanvalidation.LocalValidatorFactoryBean;
import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.reactive.function.server.RouterFunctions;
import org.springframework.web.reactive.function.server.ServerResponse;
import reactor.core.scheduler.Scheduler;
import reactor.core.scheduler.Schedulers;

import javax.validation.Validator;
import java.util.concurrent.Executors;

import static org.springframework.web.reactive.function.server.RouterFunctions.resources;

@Configuration
public class WebConfiguration {

    private final Log logger = LogFactory.getLog(this.getClass());

    @Autowired
    Environment environment;

    @Value("file:${upload.path}")
    private Resource res;

    @Bean
    Scheduler jdbcScheduler(Environment env) {
        return Schedulers
                .fromExecutor(
                        Executors
                                .newFixedThreadPool(env.getRequiredProperty("spring.jpa.properties.jdbc.connection.pool.size", Integer.class)
                                )
                );
    }

    @Bean
    @Primary
    public Validator myValidator() {
        return new LocalValidatorFactoryBean();
    }

    @Bean
    ReactiveWebServerFactory reactiveWebServerFactory(Environment env) {
        return new NettyReactiveWebServerFactory(env.getRequiredProperty("server.port", Integer.class));
    }

    @Bean
    RouterFunction<ServerResponse> corsRouter() {
        return CorsRouter.corsRoutes();
    }

    @Bean
    RouterFunction<ServerResponse> operationRouter(OperationHandler operationHandler) {
        return OperationRouter.operationRoutes(operationHandler);
    }

    @Bean
    RouterFunction<ServerResponse> postsRouter(AdminPostHandler adminPostHandler) {
        return AdminPostRouter.postsRoutes(adminPostHandler);
    }

    @Bean
    RouterFunction<ServerResponse> uploadRouter(UploadHandler uploadHandler) {
        return UploadRouter.uploadRoutes(uploadHandler);
    }

    @Bean
    RouterFunction<ServerResponse> guestPostRouter(GuestPostHandler guestPostHandler) {
        return GuestPostRouter.templateRoutes(guestPostHandler);
    }

    @Bean
    RouterFunction<ServerResponse> templateRouter(AdminTemplateHandler adminTemplateHandler) {
        return AdminTemplateRouter.templateRoutes(adminTemplateHandler);
    }

    @Bean
    RouterFunction<ServerResponse> resourceRouter() {
        return ResourceRouter.resourceRoutes(res);
    }

    @Bean
    HttpHandler webHandler(RouterFunction<ServerResponse> corsRouter,
                           RouterFunction<ServerResponse> postsRouter,
                           RouterFunction<ServerResponse> uploadRouter,
                           RouterFunction<ServerResponse> guestPostRouter,
                           RouterFunction<ServerResponse> operationRouter,
                           RouterFunction<ServerResponse> templateRouter,
                           RouterFunction<ServerResponse> resourceRouter,

                           Oauth2 oauth2) {
        return RouterFunctions.toHttpHandler(
                corsRouter
                        .andOther(postsRouter)
                        .andOther(uploadRouter)
                        .andOther(guestPostRouter)
                        .andOther(operationRouter)
                        .andOther(templateRouter)
                        .andOther(resourceRouter)
                        .filter((req, next) -> {
                            logger.debug("path: " + req.uri().getRawPath());
                            System.out.println("path: " + req.uri().getRawPath());
                            if (req.uri().getRawPath().contains("secured/") && !req.method().equals(HttpMethod.OPTIONS)) {
                                oauth2.isAuthenticated(req);
                            }
                            return next.handle(req);
                        })
        );
    }
}

