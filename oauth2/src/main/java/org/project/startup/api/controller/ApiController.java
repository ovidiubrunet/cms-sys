package org.project.startup.api.controller;

/************************************************************************************************
 Spring
 ************************************************************************************************/

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

/**
 * 
 * @author ovidiu.dragoi
 *
 */
@RestController
@RequestMapping("/api")
public abstract class ApiController {

	@Value("${registration.url}")
	private String registrationUrl;

	/**
	 * returns the url where confirm the registration based on token
	 * 
	 * @param request
	 * @return
	 */
	protected String getAppUrl(HttpServletRequest request) {
		return registrationUrl;
		// return "http://" + request.getServerName() + ":" + request.getServerPort() +
		// request.getContextPath();
	}

}
