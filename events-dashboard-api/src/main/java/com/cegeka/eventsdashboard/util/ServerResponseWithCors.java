package com.cegeka.eventsdashboard.util;

import com.cegeka.eventsdashboard.web.admin.dto.APIResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.reactive.function.server.ServerResponse;
import reactor.core.publisher.Mono;

import java.util.Collections;

import static org.springframework.web.reactive.function.BodyInserters.fromObject;

public class ServerResponseWithCors {

    private static final ServerResponseWithCors instance = new ServerResponseWithCors();
    private final MultiValueMap<String, String > headers = new LinkedMultiValueMap<>();

    private static final String ALLOWED_HEADERS = "x-requested-with, authorization, Content-Type, Authorization, credential, X-XSRF-TOKEN";
    private static final String ALLOWED_METHODS = "\"GET, PUT, POST, DELETE, OPTIONS\"";
    private static final String ALLOWED_ORIGIN = "*";
    private static final String MAX_AGE = "3600";


    private ServerResponseWithCors() {
    }

    public static ServerResponse.BodyBuilder ok() {
        return ServerResponse
                .ok()
                .header("Access-Control-Allow-Origin",ALLOWED_ORIGIN)
                .header("Access-Control-Allow-Methods",ALLOWED_METHODS)
                .header("Access-Control-Max-Age",MAX_AGE)
                .header("Access-Control-Allow-Headers",ALLOWED_HEADERS);
    }

    public static Mono<ServerResponse> ok(String result) {
        return ServerResponse
                .ok()
                .header("Access-Control-Allow-Origin",ALLOWED_ORIGIN)
                .header("Access-Control-Allow-Methods",ALLOWED_METHODS)
                .header("Access-Control-Max-Age",MAX_AGE)
                .header("Access-Control-Allow-Headers",ALLOWED_HEADERS)
                .body(Mono.just(result), String.class);
    }

    public static Mono<ServerResponse> badRequest(Exception e) {
        return fromException(HttpStatus.BAD_REQUEST, e);
    }

    public static Mono<ServerResponse> forbidden(Exception e) {
        return fromException(HttpStatus.FORBIDDEN, e);
    }

    public static Mono<ServerResponse> noContent(Object... notUsed) {
        return ServerResponse.noContent()
                .header("Access-Control-Allow-Origin",ALLOWED_ORIGIN)
                .header("Access-Control-Allow-Methods",ALLOWED_METHODS)
                .header("Access-Control-Max-Age",MAX_AGE)
                .header("Access-Control-Allow-Headers",ALLOWED_HEADERS)
                .build();
    }

    public static Mono<ServerResponse> notFound(Exception e) {
        return fromException(HttpStatus.NOT_FOUND, e);
    }

    public static Mono<ServerResponse> internalServerError() {
        return ServerResponse.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .header("Access-Control-Allow-Origin",ALLOWED_ORIGIN)
                .header("Access-Control-Allow-Methods",ALLOWED_METHODS)
                .header("Access-Control-Max-Age",MAX_AGE)
                .header("Access-Control-Allow-Headers",ALLOWED_HEADERS)
                .build();
    }

    public static Mono<ServerResponse> internalServerError(Exception e) {
        return fromException(HttpStatus.INTERNAL_SERVER_ERROR, e);
    }

    private static Mono<ServerResponse> fromException(HttpStatus status, Exception e) {
        final ServerResponse.BodyBuilder responseBuilder = ServerResponse.status(status);
        return e.getMessage() == null
                ? responseBuilder
                .header("Access-Control-Allow-Origin",ALLOWED_ORIGIN)
                .header("Access-Control-Allow-Methods",ALLOWED_METHODS)
                .header("Access-Control-Max-Age",MAX_AGE)
                .header("Access-Control-Allow-Headers",ALLOWED_HEADERS)
                .build()
                : responseBuilder
                .header("Access-Control-Allow-Origin",ALLOWED_ORIGIN)
                .header("Access-Control-Allow-Methods",ALLOWED_METHODS)
                .header("Access-Control-Max-Age",MAX_AGE)
                .header("Access-Control-Allow-Headers",ALLOWED_HEADERS).contentType(MediaType.APPLICATION_JSON).body(fromObject(new APIResponse(APIResponse.ResponseType.ERROR, Collections.singletonList(e.getMessage()))));
    }

}
