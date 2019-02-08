package org.project.startup.api.exception;

public class ClientOauth2Exception extends RuntimeException {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	public ClientOauth2Exception(String message) {
		this.message = message;
	}

	private String message;

	public String getMessage() {
		return "Error from client: "+ message;
	}

}
