package org.project.startup.email.service.impl;

import org.project.startup.email.mail.Mail;
import org.project.startup.email.service.EmailInterface;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.core.io.ClassPathResource;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Component;
import org.thymeleaf.context.Context;
import org.thymeleaf.spring5.SpringTemplateEngine;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.nio.charset.StandardCharsets;

@Component
@Scope("prototype")
public class EmailThread implements EmailInterface {

	private JavaMailSender emailSender;
	private Mail mail;
	private String template;

	@Autowired
	private SpringTemplateEngine templateEngine;

	private static final Logger LOGGER = LoggerFactory.getLogger(EmailThread.class);

	public void setMail(JavaMailSender emailSender, Mail mail, String template) {
		this.emailSender = emailSender;
		this.mail = mail;
		this.template = template;
	}

	@Override
	public void run() {
		MimeMessage message = emailSender.createMimeMessage();

		try {
			MimeMessageHelper helper = new MimeMessageHelper(message, MimeMessageHelper.MULTIPART_MODE_MIXED_RELATED,
					StandardCharsets.UTF_8.name());
			// adaugare atasament
			helper.addAttachment("logo.png", new ClassPathResource("memorynotfound-logo.png"));

			Context context = new Context();
			context.setVariables(mail.getModel());
			String html = templateEngine.process(template, context);

			helper.setTo(mail.getTo());
			helper.setText(html, true);
			helper.setSubject(mail.getSubject());
			helper.setFrom(mail.getFrom());
		} catch (MessagingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		emailSender.send(message);
		LOGGER.info("Email sent.");
	}
}
