package com.cegeka.eventsdashboard.web.admin.router;

import com.cegeka.eventsdashboard.web.admin.handler.OperationHandler;
import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.reactive.function.server.ServerResponse;

import static org.springframework.http.MediaType.APPLICATION_JSON;
import static org.springframework.http.MediaType.TEXT_EVENT_STREAM;
import static org.springframework.web.reactive.function.server.RequestPredicates.*;
import static org.springframework.web.reactive.function.server.RouterFunctions.nest;
import static org.springframework.web.reactive.function.server.RouterFunctions.route;

public class OperationRouter {
    public static RouterFunction<ServerResponse> operationRoutes(OperationHandler operationHandler) {
        return nest(path("/secured"),
                nest(accept(APPLICATION_JSON).or(contentType(APPLICATION_JSON).or(accept(TEXT_EVENT_STREAM))),
                       nest(path("operation"),
                               route(POST("/").and(contentType(APPLICATION_JSON)), operationHandler::inits))

                )

        );
    }
}
