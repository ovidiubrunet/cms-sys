package com.cegeka.eventsdashboard.web.admin.dto;

public class Authorized {
    private String message;

    public Authorized(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }
}
