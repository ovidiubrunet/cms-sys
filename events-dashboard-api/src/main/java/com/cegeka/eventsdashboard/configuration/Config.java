package com.cegeka.eventsdashboard.configuration;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@ComponentScan(basePackages = {
        "com.cegeka.eventsdashboard.configuration",
        "com.cegeka.eventsdashboard.service",
        "com.cegeka.eventsdashboard.web"
})
public class Config {
}
