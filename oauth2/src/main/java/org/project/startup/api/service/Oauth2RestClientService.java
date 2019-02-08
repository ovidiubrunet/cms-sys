package org.project.startup.api.service;

import org.project.startup.api.dto.TokenDTO;
import org.project.startup.api.model.AuthTokenInfo;

import javax.servlet.http.HttpServletRequest;

public interface Oauth2RestClientService {
	public AuthTokenInfo sendTokenRequest(HttpServletRequest httpRequest, TokenDTO dto);
}
