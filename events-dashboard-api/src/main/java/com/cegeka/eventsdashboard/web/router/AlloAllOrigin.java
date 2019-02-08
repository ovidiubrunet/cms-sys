package com.cegeka.eventsdashboard.web.router;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.reactive.config.CorsRegistration;
import org.springframework.web.reactive.config.CorsRegistry;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

@Configuration
public class AlloAllOrigin {
    private static final String MAPPING_PATTERN = "/**";

    private static final List<String> ALLOWED_ORIGINS = Collections.unmodifiableList(Arrays.asList("http://localhost:4200", "http://127.0.0.1:4200","http://localhost:4200/secured"));

    public static CorsRegistration addCorsMappings(CorsRegistry registry) {
        return registry.addMapping(MAPPING_PATTERN).allowedOrigins(ALLOWED_ORIGINS.toArray(new String[0]));
    }
}
