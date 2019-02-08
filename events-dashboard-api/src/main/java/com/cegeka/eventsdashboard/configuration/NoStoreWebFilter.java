package com.cegeka.eventsdashboard.configuration;

import org.springframework.context.annotation.Configuration;
import org.springframework.http.CacheControl;
import org.springframework.web.server.ServerWebExchange;
import org.springframework.web.server.WebFilter;
import org.springframework.web.server.WebFilterChain;
import reactor.core.publisher.Mono;

@Configuration
class NoStoreWebFilter implements WebFilter {

    @Override
    public Mono<Void> filter(ServerWebExchange exchange, WebFilterChain chain) {
        System.out.println("Hola");
        exchange.getResponse().getHeaders()
                .setCacheControl(CacheControl.noStore().getHeaderValue());
        return chain.filter(exchange);
    }
}
