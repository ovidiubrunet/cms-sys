package org.project.startup.api.service.impl;

import org.apache.commons.codec.binary.Base64;
import org.project.startup.api.dto.TokenDTO;
import org.project.startup.api.exception.ClientOauth2Exception;
import org.project.startup.api.model.AuthTokenInfo;
import org.project.startup.api.service.Oauth2RestClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.*;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.stereotype.Service;
import org.springframework.util.Assert;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;

import javax.servlet.http.HttpServletRequest;
import java.util.Arrays;
import java.util.Collections;
import java.util.LinkedHashMap;


@Service
public class Oauth2RestClientServiceImpl implements Oauth2RestClientService {

	private String restServiceUri;
	private String authServerUri;
	private String clientId;
	private String clientSecret;
	private String username;
	private String password;
	
	@Autowired
	private Environment env;

	/**
	 * @param restServiceUri the restServiceUri to set
	 */
	public void setRestServiceUri(String restServiceUri) {
		this.restServiceUri = restServiceUri;
	}

	/**
	 * @param authServerUri the authServerUri to set
	 */
	public void setAuthServerUri(String authServerUri) {
		this.authServerUri = authServerUri;
	}
	/*
	 * Prepare HTTP Headers.
	 */
	private static HttpHeaders getHeaders() {
		HttpHeaders headers = new HttpHeaders();
		headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
		return headers;
	}

	/*
	 * Add HTTP Authorization header, using Basic-Authentication to send
	 * client-credentials.
	 */
	private  HttpHeaders getHeadersWithClientCredentials(TokenDTO dto) {
		String plainClientCredentials = dto.getClientId() +":" +dto.getClientSecret();
		String base64ClientCredentials = new String(Base64.encodeBase64(plainClientCredentials.getBytes()));

		HttpHeaders headers = getHeaders();	
		headers.setAccept(Collections.singletonList(new MediaType("application","json")));
		headers.add("Authorization", "Basic " + base64ClientCredentials);
		return headers;
	}

	/*
	 * Send a POST request [on /oauth/token] to get an access-token, which will
	 * then be send with each request.
	 */
	@SuppressWarnings({ "unchecked" })
	public AuthTokenInfo sendTokenRequest(HttpServletRequest httpRequest, TokenDTO dto) {
		RestTemplate restTemplate = new RestTemplate();		
		// Add the Jackson message converter
		restTemplate.getMessageConverters().add(new MappingJackson2HttpMessageConverter());

		HttpEntity<String> request = new HttpEntity<String>(getHeadersWithClientCredentials(dto));	
		
		authServerUri = getAppUrl(httpRequest);
				
		ResponseEntity<Object> response = null;
		try {
			response = restTemplate.exchange(authServerUri + "/oauth/token?grant_type=password&username="+dto.getUsername()+"&password="+dto.getPassword(), HttpMethod.POST, request, Object.class);
		} catch (RestClientException e) {
			throw new ClientOauth2Exception(e.getMessage());
		}
		
		LinkedHashMap<String, Object> map = (LinkedHashMap<String, Object>) response.getBody();
		AuthTokenInfo tokenInfo = null;

		if (map != null) {
			tokenInfo = new AuthTokenInfo();
			tokenInfo.setAccess_token((String) map.get("access_token"));
			tokenInfo.setToken_type((String) map.get("token_type"));
			tokenInfo.setRefresh_token((String) map.get("refresh_token"));
			tokenInfo.setExpires_in((int) map.get("expires_in"));
			tokenInfo.setScope((String) map.get("scope"));
			System.out.println(tokenInfo);
			// System.out.println("access_token ="+map.get("access_token")+",
			// token_type="+map.get("token_type")+",
			// refresh_token="+map.get("refresh_token")
			// +", expires_in="+map.get("expires_in")+",
			// scope="+map.get("scope"));;
		} else {
			System.out.println("No user exist----------");

		}
		return tokenInfo;
	}

	/*
	 * Send a GET request to get list of all projects.
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	private String listAllProjects(AuthTokenInfo tokenInfo) {
		Assert.notNull(tokenInfo, "Authenticate first please......");

		System.out.println("\nTesting listAllUsers API-----------");
		RestTemplate restTemplate = new RestTemplate();

		HttpEntity<String> request = new HttpEntity<String>(getHeaders());
		ResponseEntity<String> response = null;
		try {
			response = restTemplate.exchange(
					restServiceUri + "/api/projects/?access_token="  + tokenInfo.getAccess_token(), HttpMethod.GET, request,
					String.class);
		} catch (RestClientException e) {
			throw new ClientOauth2Exception(e.getMessage());
		}
		
		return response.getBody();
	}

	/**
	 * @param clientId the clientId to set
	 */
	public void setClientId(String clientId) {
		this.clientId = clientId;
	}

	/**
	 * @param clientSecret the clientSecret to set
	 */
	public void setClientSecret(String clientSecret) {
		this.clientSecret = clientSecret;
	}

	/**
	 * @param username the username to set
	 */
	public void setUsername(String username) {
		this.username = username;
	}

	/**
	 * @param password the password to set
	 */
	public void setPassword(String password) {
		this.password = password;
	}
	
	
	 /**
     * returns the url where confirm the registration based on token
     * 
     * @param request
     * @return
     */
    private String getAppUrl(HttpServletRequest request) {
        return "http://" + request.getServerName() + ":" + request.getServerPort() + request.getContextPath();
    }
	
}