package com.example.springtut.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.List;

@Configuration
public class WebMvcConfig implements WebMvcConfigurer {

    @Value("#{'${cors.allowed-Origins}'.split(',')}")
    private List<String> allowedOrigins;

    @Value("#{'${cors.allowed-Methods}'.split(',')}")
    private List<String> allowedMethods;
    @Override
    public  void addCorsMappings(CorsRegistry registry){
        CorsRegistration corsRegistration = registry.addMapping("/api/**").allowedMethods("*").allowedOrigins("*");
        allowedOrigins.forEach(corsRegistration::allowedOrigins);
        allowedMethods.forEach(corsRegistration::allowedMethods);
    }

}
