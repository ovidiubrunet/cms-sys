package com.cegeka.eventsdashboard.web.admin.router;

import com.cegeka.eventsdashboard.web.admin.handler.UploadHandler;
import org.springframework.http.HttpMethod;
import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.reactive.function.server.ServerResponse;

import static org.springframework.http.MediaType.MULTIPART_FORM_DATA;
import static org.springframework.web.reactive.function.server.RequestPredicates.*;
import static org.springframework.web.reactive.function.server.RouterFunctions.nest;
import static org.springframework.web.reactive.function.server.RouterFunctions.route;

public class UploadRouter {
    public static RouterFunction<ServerResponse> uploadRoutes(UploadHandler uploadHandler) {
        return  nest(path("/reactive-upload"),
                nest(accept(MULTIPART_FORM_DATA),
                        route(method(HttpMethod.POST), uploadHandler::upload)
                )
        );
    }
}
