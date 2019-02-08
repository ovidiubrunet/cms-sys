package com.cegeka.eventsdashboard.domain;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "templates")
public class Template {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "TEMPLATE_SEQ")
    @SequenceGenerator(name = "TEMPLATE_SEQ", sequenceName = "TEMPLATE_SEQ", allocationSize = 1)
    @Column(name = "id", updatable = false, nullable = false)
    private Long id;

    @Column(name = "template_name", nullable = false)
    private String name;

    @Column(name = "template_content", nullable = false)
    private String content;

    @OneToMany(fetch = FetchType.EAGER, mappedBy = "template")
    @JsonManagedReference
    private Set<Variable> variables;

    @OneToMany(orphanRemoval = true, fetch = FetchType.EAGER, mappedBy = "postTemplate")
    @JsonManagedReference
    private Set<Post> posts;

    @JsonBackReference
    @ManyToMany( fetch = FetchType.EAGER, mappedBy = "templates")
    private Set<Asset> assets = new HashSet<>();

    public Template() {

    }

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

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Set<Variable> getVariables() {
        return variables;
    }

    public void setVariables(Set<Variable> variables) {
        this.variables = variables;
    }

    public Set<Post> getPosts() {
        return posts;
    }

    public void setPosts(Set<Post> posts) {
        this.posts = posts;
    }

    public Set<Asset> getAssets() {
        return assets;
    }

    public void setAssets(Set<Asset> assets) {
        this.assets = assets;
    }
}
