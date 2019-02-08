package org.project.startup.api.listener;

import org.project.startup.api.event.RegistrationEvent;
import org.project.startup.api.model.User;
import org.project.startup.api.service.UserService;
import org.project.startup.email.service.impl.EmailServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.stereotype.Component;

import java.util.UUID;

@Component
public class RegistrationListener implements ApplicationListener<RegistrationEvent>{
	
    @Autowired
    private UserService service;
    
    @Autowired
    private EmailServiceImpl emailService;
   
    @Override
    public void onApplicationEvent(final RegistrationEvent event) {
        this.confirmRegistration(event);
    }

    private void confirmRegistration(final RegistrationEvent event) {
        final User user = event.getUser();
        final String token = UUID.randomUUID().toString();
        service.createVerificationTokenForUser(user, token);
        constructRegistrationEmailMessage(event, user, token);
    }

    private final void constructRegistrationEmailMessage(final RegistrationEvent event, final User user, final String token) {
    	emailService.sendRegistrationEmail(event, user, token);
    }
}
