package com.cegeka.eventsdashboard.service;

import com.cegeka.eventsdashboard.domain.*;
import com.cegeka.eventsdashboard.exception.BadRequestException;
import com.cegeka.eventsdashboard.exception.NotFoundResourceException;
import com.cegeka.eventsdashboard.exception.PostAlreadyExistsException;
import com.cegeka.eventsdashboard.repository.*;
import com.cegeka.eventsdashboard.util.MonoUtils;
import com.cegeka.eventsdashboard.util.Pagination;
import com.cegeka.eventsdashboard.util.Parser;
import com.cegeka.eventsdashboard.util.Transformer;
import com.cegeka.eventsdashboard.web.admin.dto.ApiPostResponse;
import com.cegeka.eventsdashboard.web.admin.dto.PostDTO;
import com.cegeka.eventsdashboard.web.admin.dto.PostVariableDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.web.reactive.function.server.ServerRequest;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import org.springframework.transaction.annotation.Transactional;
import reactor.core.scheduler.Scheduler;

import javax.validation.ConstraintViolationException;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Service
public class PostService {

    @Autowired
    private PostRepository postRepository;

    @Autowired
    private VariableRepository variableRepository;

    @Autowired
    private PostVariableRepository postVariableRepository;

    @Autowired
    private TemplateRepository templateRepository;

    @Autowired
    private PostPositionIdxRepository postPositionIdxRepository;

    @Autowired
    private Scheduler scheduler;


    @Transactional(
            propagation = Propagation.REQUIRED,
            rollbackFor = {Exception.class, ConstraintViolationException.class}
    )
    public Mono<PostDTO> savePost(PostDTO postDTO)  {

        String filtered = this.validateVariables(postDTO);
        if(!filtered.isEmpty()) {
            return Mono.error(new BadRequestException(filtered + " are required."));
        }

        Post postExists = this.postRepository.findByName(postDTO.getName());

        if (postExists != null){
            return  Mono.error(new PostAlreadyExistsException("Post already exists."));
        }

        Long value = this.postPositionIdxRepository.findBiggestValue();

        PostPositionIdx postPositionIdx = new PostPositionIdx();
        if (value == null) {
            value = 1L;
        }
        Optional<Template> template = templateRepository.findById(postDTO.getPostTemplateId());
        postPositionIdx.setPosition(value + 1);

        if (template.isPresent()) {
            Post post = new Post();
            post.setPostTemplate(template.get());
            post.setPostPositionIdx(postPositionIdx);
            post.setName(postDTO.getName());
            post.setUrl(postDTO.getUrl());
            postPositionIdx.setPost(post);
            this.postRepository.save(post);
            postDTO.getVariables().forEach(variable -> saveVariable(variable, post));
        }

        return Mono.just(postDTO);
    }

    @Transactional(
            propagation = Propagation.REQUIRED,
            rollbackFor = {Exception.class, ConstraintViolationException.class}
    )
    public Mono<PostDTO> updatePost(PostDTO postDTO) {

        String filtered = this.validateVariables(postDTO);
        if(!filtered.isEmpty()) {
            return Mono.error(new BadRequestException(filtered));
        }

        Optional<Post> existingPostMono = postRepository.findById(postDTO.getId());
        Optional<Template> template = templateRepository.findById(postDTO.getPostTemplateId());

        if (existingPostMono.isPresent()) {
            if (template.isPresent()) {
                Post post = existingPostMono.get();
                post.setPostTemplate(template.get());
                post.setName(postDTO.getName());
                post.setUrl(postDTO.getUrl());
                this.postRepository.save(post);
                postDTO.getVariables().forEach(variable -> saveVariable(variable, post));
            } else {
                return  Mono.error(new NotFoundResourceException("Template id: " + postDTO.getPostTemplateId().toString()));
            }
        } else {
            return  Mono.error(new NotFoundResourceException("Post id: " + postDTO.getId().toString()));
        }
        return Mono.just(postDTO);
    }


    @Transactional(
            propagation = Propagation.REQUIRED,
            rollbackFor = {Exception.class, ConstraintViolationException.class}
    )
    public void saveVariable(PostVariableDto postVariableDto, Post post) {
        String name = postVariableDto.getName();
        String value = postVariableDto.getValue();
        Variable variable = this.variableRepository.findByNameAndTemplate(name, post.getPostTemplate());
        PostVariable postVariable = new PostVariable();
        PostVariableId postVariableId = new PostVariableId();
        postVariableId.setPostId(post.getId());
        postVariableId.setVariableId(variable.getId());
        postVariable.setId(postVariableId);
        postVariable.setPost(post);
        postVariable.setValue(value);
        postVariable.setVariable(variable);
        postVariableRepository.save(postVariable);
    }

    public Mono<PostDTO> findById(String id) {
        Long postId = Long.valueOf(id);

        // Mono.fromCallable with Reactor's elastic scheduler to make sure the code is called on separate threads and will not block our Netty event loop
        return Mono.fromCallable(() -> this.postRepository.findById(postId)) // to make sure nothing gets executed until one subscribes to the mono
                .flatMap((post) -> MonoUtils.fromOptionalWithNotFoundException(
                    post, id
                ))
                .map(Parser::parse)
                .map(Transformer::transformToAdminPostResponseDTO)
                .subscribeOn(scheduler);
    }

    public Mono<ApiPostResponse> list(ServerRequest request) {
        Pagination pagination = new Pagination();
        pagination.setQueryParameters(request);
        if (!pagination.isPageable()) {
            pagination.setDefaultPaginationParameters("desc", "datePosted", "0", "10");
        }
        PageRequest pageRequest = pagination.resolvePageRequest(pagination);
        Map<String, String> qp = pagination.getQueryParameters();

        return Flux.defer(() -> Flux.fromIterable(
                pagination.isFiltered() ? postRepository.findByNameContainingAndNotExpired(pageRequest, qp.get("filter")) : postRepository.findAll(pageRequest))
        )
                .collectList()
                .map(post -> new ApiPostResponse(post,
                        pagination.isFiltered() ? postRepository.countByName(qp.get("filter")) : postRepository.countAll())).publishOn(scheduler);
    }


    private String validateVariables(PostDTO postVariableDto) {
        return postVariableDto.getVariables()
                .stream()
                .filter(var -> var.getValue() == null ||  var.getValue().isEmpty())
                .map(Object::toString)
                .collect(Collectors.joining(","));
    }

}
