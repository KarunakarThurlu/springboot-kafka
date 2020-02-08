package com.kafka.serviceimpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kafka.iservice.IUserService;
import com.kafka.model.User;
import com.kafka.repo.UserRepo;

@Service
public class UserServiceImpl implements IUserService {
	
	@Autowired
	private UserRepo repo;

	@Override
	public String saveUser(User user) {
		repo.save(user);
		return "User Register Successfully";
	}

	@Override
	public User getUserDataByEmail(String email) {
		
		return repo.findByUserEmail(email);
	}

}
