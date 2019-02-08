package org.project.startup.api.exception;

public final class UserAlreadyExistsException extends RuntimeException {
    private static final long serialVersionUID = 5861310537366287163L;
    
    private String username;

    public UserAlreadyExistsException(String username) {
        this.username = username;
    }

    public String getUsername() {
        return username;
    } 
   
    public String getMessage() {
        return "Username with email '" + username + "' already exists";
    }

}
