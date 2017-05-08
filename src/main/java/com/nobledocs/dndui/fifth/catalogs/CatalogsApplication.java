package com.nobledocs.dndui.fifth.catalogs;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.support.SpringBootServletInitializer;

@SpringBootApplication
public class CatalogsApplication extends SpringBootServletInitializer {

    public static void main(String[] args) {
        SpringApplication.run(CatalogsApplication.class, args);
    }
    
    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        return application.sources(CatalogsApplication.class);
    }
    
}
