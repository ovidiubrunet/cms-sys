package org.project.startup.email.service;

import org.project.startup.api.event.RegistrationEvent;
import org.project.startup.api.event.ResendRegistrationTokenEvent;
import org.project.startup.api.model.User;

public interface EmailService {
	
	public void sendRegistrationEmail(final RegistrationEvent event, User user, String token);

	public void resendRegistrationTokenEmail(final ResendRegistrationTokenEvent event, User user, String token);
	
}
