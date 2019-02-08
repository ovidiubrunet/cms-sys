package com.cegeka.eventsdashboard.web.admin.handler;

import com.cegeka.eventsdashboard.exception.BadRequestException;
import com.cegeka.eventsdashboard.exception.NotFoundResourceException;
import com.cegeka.eventsdashboard.exception.VariableRequiredException;
import com.cegeka.eventsdashboard.util.ServerResponseWithCors;
import com.cegeka.eventsdashboard.web.admin.dto.APIResponse;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.server.ServerRequest;
import org.springframework.web.reactive.function.server.ServerResponse;
import reactor.core.publisher.Mono;

import javax.validation.Validator;
import java.util.*;
import java.util.function.Function;

import static org.springframework.web.reactive.function.BodyInserters.fromObject;

@Component
public class RequestHandler {

    private final Validator validator;

    public RequestHandler(Validator validator) {
        this.validator = validator;
    }

    /**
     *
     * Request Validator.
     * Returns 422 http status code
     *
     * @param block
     * @param request
     * @param bodyClass
     * @param <BODY>
     * @return
     */
    public <BODY> Mono<ServerResponse> requireValidBody(
            Function<Mono<BODY>,
            Mono<ServerResponse>> block,
            ServerRequest request,
            Class<BODY> bodyClass
    ) {

        return request
                .bodyToMono(bodyClass)
                .flatMap(
                        body -> {

                            List<String> exceptions = new ArrayList<>();
                            validator.validate(body).forEach(ex -> exceptions.add(ex.getPropertyPath()+" "+ex.getMessage()));
                            APIResponse apiResponse = new APIResponse(APIResponse.ResponseType.ERROR, exceptions);

                            return validator.validate(body).isEmpty()
                                    ? block.apply(Mono.just(body))
                                    : Mono.error(new BadRequestException("is required"));
                        }
                );
    }
}