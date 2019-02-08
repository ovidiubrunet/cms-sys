package com.cegeka.eventsdashboard.web.admin.router;

import com.cegeka.eventsdashboard.util.ServerResponseWithCors;
import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.reactive.function.server.RouterFunctions;
import org.springframework.web.reactive.function.server.ServerResponse;

import static org.springframework.web.reactive.function.server.RequestPredicates.OPTIONS;
import static org.springframework.web.reactive.function.server.RequestPredicates.PATCH;

public class CorsRouter {
    public static RouterFunction<ServerResponse> corsRoutes() {
        return RouterFunctions
                .route(OPTIONS("/secured/posts"), req -> ServerResponseWithCors.ok().build())
                .andRoute(OPTIONS("/secured/posts/reorder"), req -> ServerResponseWithCors.ok().build())
                .andRoute(OPTIONS("/secured/posts/{id}"), req -> ServerResponseWithCors.ok().build())
                .andRoute(PATCH("/secured/posts/*"), req -> ServerResponseWithCors.ok().build())
                .andRoute(PATCH("/secured/posts/{id}"), req -> ServerResponseWithCors.ok().build())
                .andRoute(OPTIONS("/reactive-upload"), req -> ServerResponseWithCors.ok().build())
                .andRoute(OPTIONS("/secured/templates"), req -> ServerResponseWithCors.ok().build())
                .andRoute(OPTIONS("/secured/templates/{name}"), req -> ServerResponseWithCors.ok().build());
    }
}
