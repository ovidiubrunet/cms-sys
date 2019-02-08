package com.cegeka.eventsdashboard.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;

public class VariableRequiredException   extends ResponseStatusException {
    public VariableRequiredException(HttpStatus status, String message, Throwable e) {
        super(status, message, e);
    }
}
