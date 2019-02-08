package com.cegeka.eventsdashboard.util;

import com.cegeka.eventsdashboard.domain.*;
import com.cegeka.eventsdashboard.web.admin.dto.PostDTO;
import com.cegeka.eventsdashboard.web.admin.dto.AdminTemplatePostResponseDTO;
import com.cegeka.eventsdashboard.web.admin.dto.PostVariableDto;
import com.cegeka.eventsdashboard.web.admin.dto.VariablesDTO;
import com.cegeka.eventsdashboard.web.guest.dto.AssetsDTO;
import com.cegeka.eventsdashboard.web.guest.dto.GuestTemplateDTO;
import org.aspectj.weaver.ast.Var;

import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class Transformer {


    public static GuestTemplateDTO transformToGuestTemplateDTO(Optional<Post> post) {
        return post.map(post1 -> {
            Set<AssetsDTO> assets = new HashSet<>();
            post1.getPostTemplate().getAssets().forEach(  asset -> assets.add(new AssetsDTO(asset.getType(), asset.getPath())));
            return  new GuestTemplateDTO(post1.getPostTemplate().getContent(), assets);
        } ).orElse(null);
    }

    public static PostDTO transformToAdminPostResponseDTO(Optional<Post> post) {
        PostDTO postDTO = new PostDTO();
        Set<PostVariableDto> postVariableDtos = new HashSet<>();

        if (!post.isPresent()) {
            return postDTO;
        }

        post.get().getVariables()
                .forEach(v -> postVariableDtos.add(new PostVariableDto(v.getVariable().getName(), v.getValue())));
        postDTO.setId(post.get().getId());
        postDTO.setName(post.get().getName());
        postDTO.setUrl(post.get().getUrl());
        postDTO.setPostTemplateId(post.get().getPostTemplate().getId());
        postDTO.setPostTemplateName(post.get().getPostTemplate().getName());
        postDTO.setVariables(postVariableDtos);
        return postDTO;
    }

    public static PostDTO transformToAdminPostResponseDTO(Post post) {
        PostDTO postDTO = new PostDTO();
        Set<PostVariableDto> postVariableDtos = new HashSet<>();



        post.getVariables()
                .forEach(v -> postVariableDtos.add(new PostVariableDto(v.getVariable().getName(), v.getValue())));
        postDTO.setId(post.getId());
        postDTO.setName(post.getName());
        postDTO.setUrl(post.getUrl());
        postDTO.setPostTemplateId(post.getPostTemplate().getId());
        postDTO.setPostTemplateName(post.getPostTemplate().getName());
        postDTO.setVariables(postVariableDtos);
        return postDTO;
    }

    public static AdminTemplatePostResponseDTO transformToAdminTemplateResponseDTO(Template template) {
        AdminTemplatePostResponseDTO adminTemplatePostResponseDTO = new AdminTemplatePostResponseDTO();
        List<VariablesDTO> variablesDTOS = new ArrayList<>();

        template.getVariables()
                .forEach(v -> variablesDTOS.add(new VariablesDTO(v.getName(), v.getDefaultValue(), v.getType(), v.getInputType(), v.getLabel())));
        adminTemplatePostResponseDTO.setId(template.getId());
        adminTemplatePostResponseDTO.setName(template.getName());
        adminTemplatePostResponseDTO.setContent(template.getContent());
        adminTemplatePostResponseDTO.setVariables(variablesDTOS);

        return adminTemplatePostResponseDTO;
    }

    public static AdminTemplatePostResponseDTO transformToAdminTemplateResponseDTO(Optional<Template> template) {

        if (template.isPresent()) {
            return Transformer.transformToAdminTemplateResponseDTO(template.get());
        }
        return null;
    }
}
