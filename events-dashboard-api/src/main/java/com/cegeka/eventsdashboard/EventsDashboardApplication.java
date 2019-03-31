package com.cegeka.eventsdashboard;

import com.cegeka.eventsdashboard.configuration.Config;
import org.springframework.boot.Banner;
import org.springframework.boot.WebApplicationType;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.web.reactive.config.EnableWebFlux;

@EnableWebFlux
public class EventsDashboardApplication {
    public static void main(String[] args) {

         new SpringApplicationBuilder(EventsDashboardApplication.class)
                .sources(Config.class)
                .bannerMode(Banner.Mode.OFF)
                .web(WebApplicationType.REACTIVE)
                .build(args)
                .run(args);
    }
}
