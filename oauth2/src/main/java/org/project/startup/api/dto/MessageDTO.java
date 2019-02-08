package org.project.startup.api.dto;

import org.project.startup.api.util.MessageType;

public class MessageDTO implements DTOInterface{
	private String message;
	private MessageType type;

	public MessageDTO() {
		super();
	}

	public MessageDTO(MessageType type, String message) {
		super();
		this.message = message;
		this.type = type;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public MessageType getType() {
		return type;
	}

	public void setType(MessageType type) {
		this.type = type;
	}
}
