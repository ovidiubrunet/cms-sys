package org.project.startup.api.util;

import org.springframework.validation.Errors;
import org.springframework.validation.FieldError;
import org.springframework.validation.ObjectError;

import java.util.ArrayList;
import java.util.List;

public class ValidationUtil {

    public static List<String> fromBindingErrors(Errors errors) {    	
        List<String> validErrors = new ArrayList<String>();        
        for (ObjectError objectError : errors.getAllErrors()) {
            validErrors.add(objectError.getDefaultMessage());
        }
        return validErrors;
    }
    
    public static String buildMessage(FieldError fe) {
        StringBuilder errorCode = new StringBuilder("");
        errorCode.append("error").append(".");
        errorCode.append(fe.getObjectName()).append(".");
        errorCode.append(fe.getField()).append(".");
        errorCode.append(fe.getCode().toLowerCase());
        return errorCode.toString().toLowerCase();
      }
}
