package org.project.startup.api.listener;

import org.project.startup.api.event.ResetPasswordEvent;
import org.project.startup.api.model.User;
import org.project.startup.api.service.UserService;
import org.project.startup.email.service.impl.EmailServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.stereotype.Component;

import java.util.UUID;

@Component
public class ResetPasswordTokenListener implements ApplicationListener<ResetPasswordEvent>{
	
    @Autowired
    private UserService service;
    
    @Autowired
    private EmailServiceImpl emailService;
   
    @Override
    public void onApplicationEvent(final ResetPasswordEvent event) {
        this.resetPassword(event);
    }

    private void resetPassword(final ResetPasswordEvent event) {
        final User user = event.getUser();
        
    	final String token = UUID.randomUUID().toString();
		service.createPasswordResetTokenForUser(user, token);
		constructResetPasswordEmailMessage(event, user, token);
    }

    private final void constructResetPasswordEmailMessage(final ResetPasswordEvent event, final User user, final String token) {
    	emailService.sendResetPasswordEmail(event, user, token);
    }
}