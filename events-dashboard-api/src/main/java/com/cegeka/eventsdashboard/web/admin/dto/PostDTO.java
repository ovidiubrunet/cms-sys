package com.cegeka.eventsdashboard.web.admin.dto;

import com.cegeka.eventsdashboard.domain.PostVariable;
import com.cegeka.eventsdashboard.domain.Variable;

import javax.validation.constraints.NotEmpty;
import java.util.*;

public class PostDTO  {

    private Long id;

    @NotEmpty
    private String name;

    @NotEmpty
    private String url;

    private String category;

    private Long postTemplateId;

    private String postTemplateName;

    private Set<PostVariableDto> variables = new HashSet<>();

    private Date expireDate;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public Long getPostTemplateId() {
        return postTemplateId;
    }

    public void setPostTemplateId(Long postTemplateId) {
        this.postTemplateId = postTemplateId;
    }

    public Set<PostVariableDto> getVariables() {
        return variables;
    }

    public void setVariables(Set<PostVariableDto> variables) {
        this.variables = variables;
    }

    public String getPostTemplateName() {
        return postTemplateName;
    }

    public void setPostTemplateName(String postTemplateName) {
        this.postTemplateName = postTemplateName;
    }

    public Date getExpireDate() {
        return expireDate;
    }

    public void setExpireDate(Date expireDate) {
        this.expireDate = expireDate;
    }
}
