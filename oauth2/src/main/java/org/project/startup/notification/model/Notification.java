package org.project.startup.notification.model;

public class Notification {
	
	private String message;
	private String user;
	
	public Notification() {
		//do nothing
	}
	
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public String getUser() {
		return user;
	}
	public void setUser(String user) {
		this.user = user;
	}
}

