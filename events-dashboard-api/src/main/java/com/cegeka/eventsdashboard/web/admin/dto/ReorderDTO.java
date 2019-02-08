package com.cegeka.eventsdashboard.web.admin.dto;


import com.cegeka.eventsdashboard.domain.Post;

public class ReorderDTO {
    private Post currentPost;
    private Post previousPost;

    public Post getCurrentPost() {
        return currentPost;
    }

    public void setCurrentPost(Post currentPost) {
        this.currentPost = currentPost;
    }

    public Post getPreviousPost() {
        return previousPost;
    }

    public void setPreviousPost(Post previousPost) {
        this.previousPost = previousPost;
    }
}
