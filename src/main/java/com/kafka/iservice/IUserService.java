package com.kafka.iservice;

import com.kafka.model.User;

public interface IUserService {
	
	public String saveUser(User user);
	
	public User getUserDataByEmail(String email);
}
