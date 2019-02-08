package com.cegeka.eventsdashboard.domain;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import org.hibernate.annotations.Type;
import org.hibernate.annotations.TypeDef;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "variables")
@TypeDef(
        name = "pgsql_enum",
        typeClass = PostgreSQLEnumType.class
)
public class Variable {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE,  generator = "VARIABLE_SEQ")
    @SequenceGenerator(name="VARIABLE_SEQ", sequenceName = "VARIABLE_SEQ", allocationSize=1)
    @Column(name = "id", updatable = false, nullable = false)
    private Long id;

    @NotEmpty
    @Column(name = "name", nullable = false)
    private String name;

    @Type(type ="pgsql_enum")
    @Column(columnDefinition = "variable_type", nullable = false)
    @Enumerated(EnumType.STRING)
    private VariableType type;

    @Column(name = "default_value")
    private String defaultValue;

    @Column(name = "input_type")
    private String inputType;

    @Column(name = "label")
    private String label;

    @ManyToOne
    @JoinColumn(name="template_id", nullable=false)
    @JsonBackReference
    private Template template;

    @OneToMany(
            mappedBy = "variable",
            cascade = CascadeType.ALL,
            orphanRemoval = true,
            fetch = FetchType.EAGER
    )
    @JsonManagedReference
    private List<PostVariable> posts = new ArrayList<>();

    public Variable() {
    }

    public Variable(@NotEmpty String name, VariableType type, String inputType, String label, Template template, List<PostVariable> posts) {
        this.name = name;
        this.type = type;
        this.inputType = inputType;
        this.label = label;
        this.template = template;
        this.posts = posts;
    }

    public void addPosts (Post post, String value) {
        PostVariable postVariable = new PostVariable(post, this, value);
        posts.add(postVariable);
        post.getVariables().add(postVariable);
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

    public Template getTemplate() {
        return template;
    }

    public void setTemplate(Template template) {
        this.template = template;
    }

    public List<PostVariable> getPosts() {
        return posts;
    }

    public void setPosts(List<PostVariable> posts) {
        this.posts = posts;
    }

    public String getDefaultValue() {
        return defaultValue;
    }

    public void setDefaultValue(String defaultValue) {
        this.defaultValue = defaultValue;
    }

    public String getInputType() {
        return inputType;
    }

    public void setInputType(String inputType) {
        this.inputType = inputType;
    }

    public String getLabel() {
        return label;
    }

    public void setLabel(String label) {
        this.label = label;
    }

    public VariableType getType() {
        return type;
    }

    public void setType(VariableType type) {
        this.type = type;
    }
}
