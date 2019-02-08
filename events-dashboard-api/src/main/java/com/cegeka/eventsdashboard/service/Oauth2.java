package com.cegeka.eventsdashboard.service;

import org.springframework.web.reactive.function.server.ServerRequest;

public interface Oauth2 {
    void isAuthenticated(ServerRequest request);
}
