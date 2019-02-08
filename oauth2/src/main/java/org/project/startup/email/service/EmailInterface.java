package org.project.startup.email.service;


import org.project.startup.email.mail.Mail;
import org.springframework.mail.javamail.JavaMailSender;

public interface EmailInterface extends Runnable {
	public void setMail(JavaMailSender emailSender, Mail mail, String template);
}
