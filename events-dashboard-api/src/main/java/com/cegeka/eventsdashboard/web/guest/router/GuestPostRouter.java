package com.cegeka.eventsdashboard.web.guest.router;

import com.cegeka.eventsdashboard.web.guest.handler.GuestPostHandler;
import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.reactive.function.server.ServerResponse;

import static org.springframework.http.MediaType.APPLICATION_JSON;
import static org.springframework.web.reactive.function.server.RequestPredicates.*;
import static org.springframework.web.reactive.function.server.RouterFunctions.nest;
import static org.springframework.web.reactive.function.server.RouterFunctions.route;

public class GuestPostRouter {
    public static RouterFunction<ServerResponse> templateRoutes(GuestPostHandler guestPostHandler) {
        return nest(path("/guest"),
                nest(accept(APPLICATION_JSON),
                        route(GET("/{postName}"), guestPostHandler::show)

                )

        )
        .andNest(path("/guest-html"),
                nest(accept(APPLICATION_JSON),
                        route(GET("/{postName}"), guestPostHandler::showHtml)

                )

        );
    }
}
