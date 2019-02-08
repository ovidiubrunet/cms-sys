package com.cegeka.eventsdashboard.web.admin.handler;

import com.cegeka.eventsdashboard.repository.TemplateRepository;
import com.cegeka.eventsdashboard.util.Parser;
import com.cegeka.eventsdashboard.util.ServerResponseWithCors;
import com.cegeka.eventsdashboard.util.Transformer;
import com.cegeka.eventsdashboard.web.admin.dto.AdminTemplatePostResponseDTO;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.server.ServerRequest;
import org.springframework.web.reactive.function.server.ServerResponse;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import reactor.core.scheduler.Scheduler;

import static org.springframework.web.reactive.function.BodyInserters.fromObject;

@Component
public class AdminTemplateHandler {

    private final TemplateRepository templateRepository;
    private final Scheduler scheduler;

    public AdminTemplateHandler(TemplateRepository templateRepository, Scheduler scheduler){
        this.templateRepository = templateRepository;
        this.scheduler = scheduler;
    }

    public Mono<ServerResponse> list(ServerRequest request) {
        Flux<AdminTemplatePostResponseDTO> posts = Flux.defer(() -> Flux.fromIterable(templateRepository.findAll()))
                .map(Transformer::transformToAdminTemplateResponseDTO)
                .subscribeOn(scheduler);

        return ServerResponseWithCors
                .ok()
                .contentType(MediaType.APPLICATION_JSON)
                .body(posts, AdminTemplatePostResponseDTO.class);
    }

    public Mono<ServerResponse> show(ServerRequest request) {
        String templateName = request.pathVariable("name");
        return Mono.fromCallable(() -> this.templateRepository.findByName(templateName))
                .map(Transformer::transformToAdminTemplateResponseDTO)
                .subscribeOn(scheduler)
                .flatMap(template -> ServerResponseWithCors.ok().contentType(MediaType.APPLICATION_JSON).body(fromObject(template)))
                .switchIfEmpty(ServerResponse.notFound().build());
    }

    public Mono<ServerResponse> save(ServerRequest request) {
        return null;
    }
}
