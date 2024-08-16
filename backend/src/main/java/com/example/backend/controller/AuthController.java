package com.example.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
// import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.model.User;
import com.example.backend.service.UserService;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "http://localhost:3000")
public class AuthController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody User user) {
        try{
          User userobj = userService.registerService(user);
           return new ResponseEntity<>(userobj, HttpStatus.CREATED);
           
        }
        catch(Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);

        }
    }
    @PostMapping("/login")
public ResponseEntity<?> loginUser(@RequestBody User user) {
    try {
        User loggedInUser = userService.loginService(user);
        return new ResponseEntity<>(loggedInUser, HttpStatus.OK);
    } catch (Exception e) {
        return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
    }
  
    }

}