package com.cegeka.eventsdashboard.service;

import com.cegeka.eventsdashboard.exception.Oauth2ErrorHandler;
import com.cegeka.eventsdashboard.util.RestTemplateUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.server.ServerRequest;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Service
public class Oauth2Service implements Oauth2 {

    @Autowired
    private Environment env;

    private String authorization;
    private String token;

    @Override
    public void isAuthenticated(ServerRequest request) {

        List<String> authentication =  Stream.of(request.headers().header("Authorization").get(0).split(","))
                .collect(Collectors.toList());

        this.authorization = authentication.get(0);
        this.token = authentication.get(1)
                .toLowerCase()
                .replace("bearer", "")
                .trim();

        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", this.authorization);
        ResponseEntity<String> response = RestTemplateUtil
                .request(
                        env.getRequiredProperty("oauth2-server.url")+"/oauth/check_token?token="+ this.token,
                        HttpMethod.POST, headers,
                        String.class,
                        new Oauth2ErrorHandler());
    }
}
