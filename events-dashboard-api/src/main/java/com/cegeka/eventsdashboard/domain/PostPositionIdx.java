package com.cegeka.eventsdashboard.domain;


import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "posts_position_idx")
public class PostPositionIdx implements Serializable {
    public static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE,  generator = "POSTS_POSITION_IDX_SEQ")
    @SequenceGenerator(name="POSTS_POSITION_IDX_SEQ", sequenceName = "POSTS_POSITION_IDX_SEQ", allocationSize=1)
    @Column(name = "id", updatable = false, nullable = false)
    private Long id;

    @Column(name = "position")
    private Long position;

    @OneToOne(fetch = FetchType.EAGER, optional = false )
    @JoinColumn(name = "post_id", nullable = false)
    @JsonBackReference
    private Post post;

    public PostPositionIdx() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getPosition() {
        return position;
    }

    public void setPosition(Long position) {
        this.position = position;
    }

    public Post getPost() {
        return post;
    }

    public void setPost(Post post) {
        this.post = post;
    }
}
