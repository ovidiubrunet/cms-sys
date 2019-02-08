package com.cegeka.eventsdashboard.domain;

import com.fasterxml.jackson.annotation.JsonBackReference;
import org.aspectj.weaver.ast.Var;
import reactor.util.annotation.Nullable;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import java.io.Serializable;

@Entity
@Table(name = "post_variable")
public class PostVariable implements Serializable {

    @EmbeddedId
    private PostVariableId id;

    @ManyToOne(fetch = FetchType.EAGER)
    @JsonBackReference
    @MapsId("postId")
    private Post post;

    @ManyToOne(fetch = FetchType.EAGER)
    @JsonBackReference
    @MapsId("variableId")
    private Variable variable;

    @Column(name = "value")
    private String value;

    public PostVariable() {
    }

    public PostVariable(String value) {
        this.value = value;
    }

    public PostVariable(Post post, Variable variable, String value) {
        this.post = post;
        this.variable = variable;
        this.value = value;
        this.id = new PostVariableId(post.getId(), variable.getId());
    }

    public PostVariableId getId() {
        return id;
    }

    public void setId(PostVariableId id) {
        this.id = id;
    }

    public Post getPost() {
        return post;
    }

    public void setPost(Post post) {
        this.post = post;
    }

    public Variable getVariable() {
        return variable;
    }

    public void setVariable(Variable variable) {
        this.variable = variable;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }
}
