package com.cegeka.eventsdashboard.web.admin.dto;

import com.cegeka.eventsdashboard.domain.Post;

import java.util.List;

public class ApiPostResponse  {
    private List<Post> posts;
    private Long count;

    public ApiPostResponse(List<Post> posts, Long count) {
        this.posts = posts;
        this.count = count;
    }

    public List<Post> getPosts() {
        return posts;
    }

    public Long getCount() {
        return count;
    }
}
