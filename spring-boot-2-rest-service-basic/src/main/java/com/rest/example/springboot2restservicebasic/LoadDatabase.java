package com.rest.example.springboot2restservicebasic;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
class LoadDatabase {

    private static final Logger log = LoggerFactory.getLogger(LoadDatabase.class);

    @Bean
    CommandLineRunner initDatabase(UserRepository userRepository) {

        return args -> {
            log.info("Preloading " + userRepository.save(new User((long) 10001,"pavan","pavan@email.com","9010546765","react","hyd")));
            log.info("Preloading " + userRepository.save(new User((long) 10002,"ravi","ravi@email.com","9010546767","react","sec")));
        };
    }
}