package com.cegeka.eventsdashboard.web.admin.router;

import com.cegeka.eventsdashboard.web.admin.handler.AdminPostHandler;
import org.springframework.http.HttpMethod;
import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.reactive.function.server.ServerResponse;

import static org.springframework.http.MediaType.APPLICATION_JSON;
import static org.springframework.http.MediaType.TEXT_EVENT_STREAM;
import static org.springframework.web.reactive.function.server.RequestPredicates.*;
import static org.springframework.web.reactive.function.server.RouterFunctions.nest;
import static org.springframework.web.reactive.function.server.RouterFunctions.route;

public class AdminPostRouter {
    public static RouterFunction<ServerResponse> postsRoutes(AdminPostHandler adminPostHandler) {
        return nest(path("/secured"),
                nest(accept(APPLICATION_JSON).or(contentType(APPLICATION_JSON).or(accept(TEXT_EVENT_STREAM))),
                        nest(path("/posts"),
                                route(GET("/{id}"), adminPostHandler::getOnePostById)
                                .andRoute(PUT("/{id}"), adminPostHandler::updatePost)
                                .andRoute(method(HttpMethod.GET), adminPostHandler::getAllPosts)
                                .andRoute(POST("/"), adminPostHandler::save)
                                .andRoute(POST("/reorder"), adminPostHandler::saveOrder)
                                .andNest(path("/{id}"),
                                        route(DELETE("/"), adminPostHandler::deleteOrder)
                                        .andRoute(POST("/").and(contentType(APPLICATION_JSON)), adminPostHandler::updateOrder)
                                )
                        )
                )
        );
    }
}