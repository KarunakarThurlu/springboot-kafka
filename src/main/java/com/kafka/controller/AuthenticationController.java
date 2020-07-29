package com.kafka.controller;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.kafka.jwtutil.JwtUtil;
import com.kafka.model.AuthToken;
import com.kafka.model.User;

@RestController
@RequestMapping("/kafka")
public class AuthenticationController {
	
	@Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtUtil jwtTokenUtil;
    

    
    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public ResponseEntity<?> login(@RequestBody User user,HttpSession session) throws AuthenticationException {
        final Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken( user.getUserName(), user.getUserPwd()));
        SecurityContextHolder.getContext().setAuthentication(authentication);
        final String token = jwtTokenUtil.generateToken(authentication);
        if(token!=null && !token.isEmpty()) {
        	session.setAttribute("userName",user.getUserName());
        	session.setAttribute("userEmail",user.getUserEmail());
        }
        return ResponseEntity.ok(new AuthToken(token));
    }


}
