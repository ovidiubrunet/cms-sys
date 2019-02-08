package org.project.startup.api.listener;


import org.project.startup.api.event.ResendRegistrationTokenEvent;
import org.project.startup.api.model.User;
import org.project.startup.email.service.impl.EmailServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.stereotype.Component;

@Component
public class ResendRegistrationTokenListener implements ApplicationListener<ResendRegistrationTokenEvent>{
    
    @Autowired
    private EmailServiceImpl emailService;
   
    @Override
    public void onApplicationEvent(final ResendRegistrationTokenEvent event) {
        constructResendRegistrationTokenEmailMessage(event, event.getUser(), event.getToken());
    }

    private final void constructResendRegistrationTokenEmailMessage(final ResendRegistrationTokenEvent event, final User user, final String token) {
    	emailService.resendRegistrationTokenEmail(event, user, token);
    }
}
