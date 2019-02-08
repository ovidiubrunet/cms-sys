package org.project.startup.api.exception;

public final class RegistrationTokenNotFoundException extends RuntimeException {
    private static final long serialVersionUID = 5861310537366286163L;
    
  
     public String getMessage() {
        return "The token is not valid.";
    }

}

