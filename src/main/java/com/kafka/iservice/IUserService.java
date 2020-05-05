package com.kafka.iservice;

import com.kafka.model.User;
import com.kafka.model.UsersData;

public interface IUserService {
	
	//==================SQL Query specific methods============== 
	
	
	public String saveUser(User user);
	
	public User getUserDataByEmail(String email);
	
	
	
	//==================NOSQL Query specific methods============
	
	public String saveUserData(String rawdata);
	
	public UsersData getOneUser(String name);
	
	
}
