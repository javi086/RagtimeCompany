package com.example.ragtimeCompanyV5.service;

import com.example.ragtimeCompanyV5.model.Event;
import com.example.ragtimeCompanyV5.model.User;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class UserService {
    Map<Long, User> users = new HashMap<>();

    public Map<Long, User> getAllUsers(){
        return users;
    }

    public User createUser(Long id, User user) {
        users.put(id, user);
        return user;
    }

    public User getUserByName(String name){
        return users.values().stream()
                .filter(user -> user.getName().equals(name))
                .findFirst()
                .orElse(null);
    }



}