package com.cegeka.eventsdashboard.util;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.ResponseErrorHandler;
import org.springframework.web.client.RestTemplate;

public class RestTemplateUtil{
    private static RestTemplate restTemplate = new RestTemplate();
    public static  <T, R extends ResponseErrorHandler> ResponseEntity<T> request(String path, HttpMethod httpMethod, HttpHeaders headers, Class<T> res, R errorHandler) {
        HttpEntity<?> entity = new HttpEntity<>(headers);

        restTemplate.setErrorHandler(errorHandler);

        return  restTemplate
                .exchange(
                    path,
                    httpMethod,
                    entity,
                    res);

    }
}
