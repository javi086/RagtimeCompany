package com.example.ragtimeCompanyV5.controller;

import com.example.ragtimeCompanyV5.model.Event;
import com.example.ragtimeCompanyV5.model.User;
import com.example.ragtimeCompanyV5.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/v1/users")
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping("/")
    public Map<Long, User> getAllUsers(){
        return userService.getAllUsers();
    }

  @PostMapping("/{id}")
    public User createUser(@PathVariable Long id, @RequestBody User user){
        return userService.createUser(id, user);
    }

    @GetMapping("/byName")
    public ResponseEntity<User> getUserByName(@RequestParam String name){
        User user = userService.getUserByName(name);
        return user != null ? ResponseEntity.ok(user) : ResponseEntity.notFound().build();
    }

}
