package com.kafka.dao;

import com.kafka.model.UsersData;

public interface IUserDataDao {
	
	public String saveUserData(UsersData usersdata);
	
	public UsersData getOneUser(String useName);
}
