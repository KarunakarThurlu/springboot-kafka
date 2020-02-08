package com.kafka.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.kafka.model.User;

public interface UserRepo extends JpaRepository<User, Integer> {
	public User findByUserEmail(String email);

}
