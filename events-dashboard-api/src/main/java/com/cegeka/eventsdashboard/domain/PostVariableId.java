package com.cegeka.eventsdashboard.domain;


import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;


@Embeddable
public class PostVariableId implements Serializable {
    @Column(name = "post_id")
    private Long postId;

    @Column(name = "variable_id")
    private Long variableId;

    public PostVariableId(){}

    public PostVariableId(Long post, Long variable) {
        this.postId = post;
        this.variableId = variable;
    }



    public Long getPostId() {
        return postId;
    }

    public void setPostId(Long postId) {
        this.postId = postId;
    }

    public Long getVariableId() {
        return variableId;
    }

    public void setVariableId(Long variableId) {
        this.variableId = variableId;
    }
}


