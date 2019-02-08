package com.cegeka.eventsdashboard.domain;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import org.hibernate.annotations.CacheConcurrencyStrategy;
import org.hibernate.annotations.NaturalIdCache;
import reactor.util.annotation.Nullable;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import java.io.Serializable;
import java.util.*;

@Entity
@Table(name = "posts")
public class Post implements Serializable {

    public static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE,  generator = "POST_SEQ")
    @SequenceGenerator(name="POST_SEQ", sequenceName = "POST_SEQ", allocationSize=1)
    @Column(name = "id", updatable = false, nullable = false)
    private Long id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "url", nullable = false)
    private String url;


    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "post_template_id")
    @JsonBackReference
    private Template postTemplate;

    @OneToMany(
            mappedBy = "post",
            orphanRemoval = true,

            fetch = FetchType.EAGER
    )
    @JsonManagedReference
    private Set<PostVariable> variables = new HashSet<>();


    @Column(name = "date_posted")
    private Date datePosted;

    @Column(name = "expire_date")
    private Date expireDate;

    @OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL, mappedBy = "post")
    @JsonManagedReference
    private PostPositionIdx postPositionIdx;

    public Post() {}

    public Post(String name, String url, Template postTemplate, Set<PostVariable> variables, Date expireDate) {
        this.name = name;
        this.url = url;
        this.postTemplate = postTemplate;
        this.variables = variables;
        this.expireDate = expireDate;
    }

    public Post(@NotEmpty String name, String url, Set<PostVariable> variables, Date expireDate) {
        this.name = name;
        this.url = url;
        this.variables = variables;
        this.expireDate = expireDate;
    }

    public Post(Long id, Date datePosted, Date expireDate) {
        this.id = id;
        this.datePosted = datePosted;
        this.expireDate = expireDate;
        this.postPositionIdx = postPositionIdx;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getDatePosted() {
        return datePosted;
    }

    @PrePersist
    public void setDatePosted() {
        this.datePosted = new Date();
    }

    public PostPositionIdx getPostPositionIdx() {
        return postPositionIdx;
    }

    public void setPostPositionIdx(PostPositionIdx postPositionIdx) {
        this.postPositionIdx = postPositionIdx;
    }

    public Date getExpireDate() {
        return expireDate;
    }

    public void setExpireDate(Date expireDate) {
        this.expireDate = expireDate;
    }

    public void setDatePosted(Date datePosted) {
        this.datePosted = datePosted;
    }

    public static long getSerialVersionUID() {
        return serialVersionUID;
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

    public Set<PostVariable> getVariables() {
        return variables;
    }


    public void addVariable (Variable variable, String value) {
        PostVariable postVariable = new PostVariable(this, variable, value);
        variables.add(postVariable);
        variable.getPosts().add(postVariable);
    }

    public void removeVariable(Variable variable) {
        for (Iterator<PostVariable> iterator = variables.iterator();
             iterator.hasNext(); ) {
            PostVariable postVariable = iterator.next();

            if (postVariable.getPost().equals(this) &&
                    postVariable.getVariable().equals(variable)) {
                iterator.remove();
                postVariable.getVariable().getPosts().remove(postVariable);
                postVariable.setPost(null);
                postVariable.setVariable(null);
            }
        }
    }

    public Template getPostTemplate() {
        return postTemplate;
    }

    public void setPostTemplate(Template postTemplate) {
        this.postTemplate = postTemplate;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Post)) return false;
        Post post = (Post) o;
        return Objects.equals(getId(), post.getId()) &&
                Objects.equals(getName(), post.getName()) &&
                Objects.equals(getUrl(), post.getUrl()) &&
                Objects.equals(getPostTemplate(), post.getPostTemplate()) &&
                Objects.equals(getVariables(), post.getVariables()) &&
                Objects.equals(getDatePosted(), post.getDatePosted()) &&
                Objects.equals(getExpireDate(), post.getExpireDate()) &&
                Objects.equals(getPostPositionIdx(), post.getPostPositionIdx());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId(), getName(), getUrl(), getPostTemplate(), getVariables(), getDatePosted(), getExpireDate(), getPostPositionIdx());
    }

    @Override
    public String toString() {
        return "Post{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", url='" + url + '\'' +
                ", postTemplate=" + postTemplate +
                ", variables=" + variables +
                ", datePosted=" + datePosted +
                ", expireDate=" + expireDate +
                ", postPositionIdx=" + postPositionIdx +
                '}';
    }
}
