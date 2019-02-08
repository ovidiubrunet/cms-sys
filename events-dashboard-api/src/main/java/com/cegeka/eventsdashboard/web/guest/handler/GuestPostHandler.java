package com.cegeka.eventsdashboard.web.guest.handler;

import com.cegeka.eventsdashboard.repository.PostRepository;
import com.cegeka.eventsdashboard.util.Parser;
import com.cegeka.eventsdashboard.util.ServerResponseWithCors;
import com.cegeka.eventsdashboard.util.Transformer;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.server.ServerRequest;
import org.springframework.web.reactive.function.server.ServerResponse;
import reactor.core.publisher.Mono;
import reactor.core.scheduler.Scheduler;

import java.util.Optional;

import static org.springframework.web.reactive.function.BodyInserters.fromObject;

@Component("guestHandler")
public class GuestPostHandler {

    private final PostRepository postRepository;
    public final Scheduler scheduler;
    protected final Log logger = LogFactory.getLog(this.getClass());

    public GuestPostHandler(PostRepository postRepository, Scheduler scheduler){
        this.postRepository = postRepository;
        this.scheduler = scheduler;
    }

    public Mono<ServerResponse> show(ServerRequest request) {
        String postName = request.pathVariable("postName");
        return Mono.fromCallable(() -> this.postRepository.findByName(postName))
                .log("transform in optional of Post")
                .map(Optional::of)
                .log("check if post is not null, return 404")
                .filter(Optional::isPresent)
                .map(Parser::parse)
                .map(Transformer::transformToGuestTemplateDTO)
                .subscribeOn(scheduler)
                .flatMap(post -> ServerResponseWithCors.ok().contentType(MediaType.APPLICATION_JSON).body(fromObject(post)))
                .switchIfEmpty(ServerResponse.notFound().build());
    }

    public Mono<ServerResponse> showHtml(ServerRequest request) {
        String postName = request.pathVariable("postName");
        return Mono.fromCallable(() -> this.postRepository.findByName(postName))
                .log("transform in optional of Post")
                .map(Optional::of)
                .log("check if post is not null, return 404")
                .filter(Optional::isPresent)
                .map(Parser::parse)
                .map(Transformer::transformToGuestTemplateDTO)
                .subscribeOn(scheduler)
                .flatMap(post -> ServerResponseWithCors.ok().contentType(MediaType.TEXT_HTML).body(fromObject(post.getTemplate())))
                .switchIfEmpty(ServerResponse.notFound().build());
    }
}
