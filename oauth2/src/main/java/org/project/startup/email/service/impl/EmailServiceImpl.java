package org.project.startup.email.service.impl;

import org.project.startup.api.event.RegistrationEvent;
import org.project.startup.api.event.ResendRegistrationTokenEvent;
import org.project.startup.api.event.ResetPasswordEvent;
import org.project.startup.api.model.User;
import org.project.startup.email.mail.Mail;
import org.project.startup.email.service.EmailInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.core.task.TaskExecutor;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class EmailServiceImpl {

	@Autowired
	private JavaMailSender emailSender;

	@Autowired
	private TaskExecutor taskExecutor;

	@Autowired
	private ApplicationContext applicationContext;

	public void sendRegistrationEmail(final RegistrationEvent event, User user, String token) {

		final String confirmationUrl = event.getAppUrl() + "/registrationConfirm.html?token=" + token;

		Mail mail = new Mail();
		mail.setFrom("dragoiovidiu2011@gmail.com");
		mail.setTo(user.getEmail());
		mail.setSubject("Registration Token Email");

		// set variables in email body
		Map<String, Object> model = new HashMap<>();
		model.put("name", user.getFirstName() + " " + user.getLastName());
		model.put("location", "Iasi");
		model.put("signature", "http://projectstartup.com");
		model.put("token", confirmationUrl);

		mail.setModel(model);

		EmailInterface email = applicationContext.getBean(EmailThread.class);
		email.setMail(emailSender, mail, "email-template");
		taskExecutor.execute(email);

	}
	
	public void sendResetPasswordEmail(final ResetPasswordEvent event, User user, String token) {

		final String confirmationUrl = event.getAppUrl() + "/registrationConfirm.html?token=" + token;

		Mail mail = new Mail();
		mail.setFrom("dragoiovidiu2011@gmail.com");
		mail.setTo(user.getEmail());
		mail.setSubject("Reset Password Email");

		// set variables in email body
		Map<String, Object> model = new HashMap<>();
		model.put("name", user.getFirstName() + " " + user.getLastName());
		model.put("location", "Iasi");
		model.put("signature", "http://projectstartup.com");
		model.put("token", confirmationUrl);

		mail.setModel(model);

		EmailInterface email = applicationContext.getBean(EmailThread.class);
		email.setMail(emailSender, mail, "email-template");
		taskExecutor.execute(email);

	}

	public void resendRegistrationTokenEmail(final ResendRegistrationTokenEvent event, User user, String token) {

		final String confirmationUrl = event.getAppUrl() + "/registrationConfirm.html?token=" + token;

		Mail mail = new Mail();
		mail.setFrom("dragoiovidiu2011@gmail.com");
		mail.setTo(user.getEmail());
		mail.setSubject("Resend Registration Token Email");

		// set variables in email body
		Map<String, Object> model = new HashMap<>();
		model.put("name", user.getFirstName() + " " + user.getLastName());
		model.put("location", "Iasi");
		model.put("signature", "http://projectstartup.com");
		model.put("token", confirmationUrl);

		mail.setModel(model);

		EmailInterface email = applicationContext.getBean(EmailThread.class);
		email.setMail(emailSender, mail, "email-template");
		taskExecutor.execute(email);

	}

}
