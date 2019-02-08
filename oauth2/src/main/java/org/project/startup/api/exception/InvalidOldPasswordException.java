package org.project.startup.api.exception;

public final class InvalidOldPasswordException extends RuntimeException {

    private static final long serialVersionUID = 5861310537366287163L;

    public String getMessage() {
        return "invalid old password";
    }


}
