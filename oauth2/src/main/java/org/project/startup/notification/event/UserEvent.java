package org.project.startup.notification.event;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.project.startup.notification.model.User;
import org.project.startup.notification.util.Payload;

public class UserEvent {
	public enum Type {
		SYSTEM_NOTIFICATION
	}

	private Type type;
	private Payload payload;

	@JsonCreator
	public UserEvent(@JsonProperty("type") Type type, @JsonProperty("payload") Payload payload) {
		this.type = type;
		this.payload = payload;
	}

	public Type getType() {
		return type;
	}

	public Payload getPayload() {
		return payload;
	}

	@JsonIgnore
	public User getUser() {
		return getPayload().getUser();
	}

}
