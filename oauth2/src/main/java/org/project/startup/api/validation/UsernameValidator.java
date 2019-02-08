package org.project.startup.api.validation;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class UsernameValidator implements ConstraintValidator<ValidUsername, String> {
    private Pattern pattern;
    private Matcher matcher;
    private static final String USERNAME_PATTERN = "^[a-zA-Z0-9]+([a-zA-Z0-9](_|-|\\s\\s)[a-zA-Z0-9])*[a-zA-Z0-9]*$";

    @Override
    public void initialize(final ValidUsername constraintAnnotation) {
    }

    @Override
    public boolean isValid(final String username, final ConstraintValidatorContext context) {
        return (validateUsername(username));
    }

    private boolean validateUsername(final String email) {
        pattern = Pattern.compile(USERNAME_PATTERN);
        matcher = pattern.matcher(email);
        return matcher.matches();
    }
}