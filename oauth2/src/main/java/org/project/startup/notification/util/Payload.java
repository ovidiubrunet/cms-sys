package org.project.startup.notification.util;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.project.startup.notification.model.User;

public class Payload {
	private User user;
	private String message;

	public Payload(User user, String message) {
		this(user);
		this.message = message;
	}

	@JsonCreator
	private Payload(@JsonProperty("user") User user) {
		this.user = user;
	}

	public User getUser() {
		return user;
	}

	public String getMessage() {
		return message;
	}

}
