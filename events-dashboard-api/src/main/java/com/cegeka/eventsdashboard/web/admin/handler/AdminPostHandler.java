package com.cegeka.eventsdashboard.web.admin.handler;

import com.cegeka.eventsdashboard.domain.*;
import com.cegeka.eventsdashboard.exception.*;
import com.cegeka.eventsdashboard.repository.*;
import com.cegeka.eventsdashboard.service.PostService;
import com.cegeka.eventsdashboard.service.ReorderService;
import com.cegeka.eventsdashboard.util.*;
import com.cegeka.eventsdashboard.web.admin.dto.*;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.server.ServerRequest;
import org.springframework.web.reactive.function.server.ServerResponse;
import reactor.core.publisher.Mono;
import reactor.core.scheduler.Scheduler;

import java.util.*;

import static org.springframework.web.reactive.function.BodyInserters.fromObject;

@Service
public class AdminPostHandler {

    @Autowired
    private PostRepository postRepository;

    @Autowired
    private PostPositionIdxRepository postPositionIdxRepository;

    @Autowired
    private Scheduler scheduler;

    @Autowired
    private RequestHandler requestHandler;

    @Autowired
    private PostService postService;

    @Autowired
    private ReorderService reorderService;

    private final Log logger = LogFactory.getLog(this.getClass());

    public AdminPostHandler() {

    }

    public Mono<ServerResponse> getAllPosts(ServerRequest request) {
        return this.postService.list(request)
                .flatMap(JsonWriter::write)
                .flatMap(ServerResponseWithCors::ok)
                .onErrorResume(JsonProcessingException.class, ServerResponseWithCors::internalServerError)
                .subscribeOn(scheduler);
    }

    public Mono<ServerResponse> getOnePostById(ServerRequest request) {
        return this.postService
                .findById(request.pathVariable("id"))
                .flatMap(JsonWriter::write)
                .flatMap(ServerResponseWithCors::ok)
                .onErrorResume(NotFoundResourceException.class, ServerResponseWithCors::notFound)
                .onErrorResume(JsonProcessingException.class, ServerResponseWithCors::internalServerError)
                .subscribeOn(scheduler);
    }

    /**
     * @param request
     * @return
     */
    public Mono<ServerResponse> save(ServerRequest request) {
        return requestHandler
                .requireValidBody(body -> {
                    Mono<PostDTO> postMono = body.map(addPost -> addPost);
                    return postMono
                            .flatMap(postService::savePost)
                            .flatMap((post) -> ServerResponseWithCors.ok().body(fromObject(new APIResponse(APIResponse.ResponseType.SUCCESS, Collections.singletonList(post.getUrl())))))
                            .onErrorResume(NotFoundResourceException.class, ServerResponseWithCors::notFound)
                            .onErrorResume(ForbiddenResourceOverrideException.class, ServerResponseWithCors::forbidden)
                            .onErrorResume(VariableRequiredException.class, ServerResponseWithCors::badRequest)
                            .onErrorResume(PostAlreadyExistsException.class, ServerResponseWithCors::badRequest)
                            .subscribeOn(scheduler);

                }, request, PostDTO.class)
                .onErrorResume(BadRequestException.class, ServerResponseWithCors::badRequest);
    }

    public Mono<ServerResponse> updatePost(ServerRequest request) {

        return requestHandler
                .requireValidBody(body -> {
                    Mono<PostDTO> postMono = body.map(updatePost -> updatePost);
                    return postMono
                            .flatMap(postService::updatePost)
                            .flatMap((post) -> ServerResponseWithCors.ok().body(fromObject(new APIResponse(APIResponse.ResponseType.SUCCESS, Collections.singletonList(post.getUrl())))))
                            .onErrorResume(NotFoundResourceException.class, ServerResponseWithCors::notFound)
                            .onErrorResume(ForbiddenResourceOverrideException.class, ServerResponseWithCors::forbidden)
                            .onErrorResume(VariableRequiredException.class, ServerResponseWithCors::badRequest)
                            .onErrorResume(PostAlreadyExistsException.class, ServerResponseWithCors::badRequest)
                            .subscribeOn(scheduler);

                }, request, PostDTO.class)
                .onErrorResume(BadRequestException.class, ServerResponseWithCors::badRequest);
    }

    /**
     * @param request
     * @return
     */
    public Mono<ServerResponse> saveOrder(ServerRequest request) {
        return request
                .bodyToMono(ReorderDTO.class)
                .flatMap(reorderService::saveOrder)
                .flatMap((post) -> ServerResponseWithCors.ok().body(fromObject(new APIResponse(APIResponse.ResponseType.SUCCESS, Collections.singletonList(post.getCurrentPost().getPostPositionIdx().getPosition().toString())))))
                .subscribeOn(scheduler);
    }

    public Mono<ServerResponse> updateOrder(ServerRequest request) {
        Long id = Long.valueOf(request.pathVariable("id"));
        Mono<Post> existingPostMono = MonoUtils.optionalToMono(postRepository.findById(id));

        return request.bodyToMono(PostDTO.class).zipWith(existingPostMono, (post, existingPost) -> new Post(
                existingPost.getId(),
                existingPost.getDatePosted(),
                new GregorianCalendar(3000, 12, 12).getTime()
        )).flatMap(post -> ServerResponse.ok()
                .contentType(MediaType.APPLICATION_JSON)
                .body(
                        fromObject(
                                MonoUtils.optionalToMono(
                                        Optional.ofNullable(postRepository.save(post)
                                        )
                                )
                        )
                )
                .switchIfEmpty(ServerResponse.notFound().build()));
    }

    public Mono<ServerResponse> deleteOrder(ServerRequest request) {
        Long id = Long.valueOf(request.pathVariable("id"));

        return Mono.fromCallable(() -> {
            Optional<Post> post = postRepository.findById(Long.valueOf(id));
            post.get().setExpireDate(new Date());
            return this.postRepository.save(post.get());
        })
                .subscribeOn(scheduler)
                .flatMap(post -> ServerResponse.ok().contentType(MediaType.APPLICATION_JSON).body(fromObject(post)));

    }

}
