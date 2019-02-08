package org.project.startup.notification.service.impl;

import org.project.startup.notification.event.UserEvent;
import org.project.startup.notification.service.NotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.core.task.TaskExecutor;
import org.springframework.stereotype.Service;

@Service
public class NotificationServiceImpl implements NotificationService {
	
	@Autowired
	private ApplicationContext applicationContext;
	
	@Autowired
	private TaskExecutor taskExecutor;

	@Override
	public void sendNotification(UserEvent notification) {		
		NotificationThread notificationSend = applicationContext.getBean(NotificationThread.class);
		notificationSend.setNotification(notification);
		taskExecutor.execute(notificationSend);	
	}
	
}
