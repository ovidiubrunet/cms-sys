package org.project.startup.notification.service.impl;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.project.startup.notification.event.UserEvent;
import org.project.startup.notification.util.WebsocketClient;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

@Component
@Scope("prototype")
public class NotificationThread implements Runnable {
	
	private UserEvent notification;
	
	@Override
	public void run() {
		ObjectMapper mapper = new ObjectMapper();
		try {
			WebsocketClient.send(mapper.writeValueAsString(notification), notification.getUser().getAlias());
		} catch (JsonProcessingException e) {
			throw new RuntimeException(e);
		}

	}
	
	public void setNotification(UserEvent notification) {
		this.notification = notification;
	}
}
