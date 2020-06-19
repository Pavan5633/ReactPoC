package com.rest.example.springboot2restservicebasic;

public class UserNotFoundException extends RuntimeException {

    public UserNotFoundException(String exception) {
        super(exception);
    }

}
