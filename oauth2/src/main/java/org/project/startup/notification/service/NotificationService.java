package org.project.startup.notification.service;

import org.project.startup.notification.event.UserEvent;

public interface NotificationService {
	public void sendNotification(UserEvent notification);
}
