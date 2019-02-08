package com.cegeka.eventsdashboard.web.admin.dto;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class APIResponse {

    private ResponseType response;
    private List<String> messages;


    public enum ResponseType {
        SUCCESS,
        ERROR,
        WARNING;

    }
    public  APIResponse(ResponseType responseType, List<String> messages) {
        this.response = responseType;
        this.messages = messages;
    }


    public ResponseType getResponse() {
        return response;
    }

    public List<String> getMessages() {
        return messages;
    }


}
