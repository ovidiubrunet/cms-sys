package com.cegeka.eventsdashboard.exception;

public class NotFoundResourceException extends Exception {

    public NotFoundResourceException(String resourceName) {
        super("Resource " + resourceName + " not found.");
    }

}
