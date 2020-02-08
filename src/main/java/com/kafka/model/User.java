package com.kafka.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="User_Table")
public class User {
	
	@Id
	@GeneratedValue
	private Integer userId;
	
	private String userName;
	
	private String userEmail;
	
	private String userGender;
	
	private String userPhono;
	
	private String userPwd;
	
	
	public User(Integer userId, String userName, String userEmail, String userGender, String userPhono,
			String userPwd) {
		super();
		this.userId = userId;
		this.userName = userName;
		this.userEmail = userEmail;
		this.userGender = userGender;
		this.userPhono = userPhono;
		this.userPwd = userPwd;
	}

	public String getUserPwd() {
		return userPwd;
	}

	public void setUserPwd(String userPwd) {
		this.userPwd = userPwd;
	}

	public User() {
		super();
	}

	public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getUserEmail() {
		return userEmail;
	}

	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}

	public String getUserGender() {
		return userGender;
	}

	public void setUserGender(String userGender) {
		this.userGender = userGender;
	}

	public String getUserPhono() {
		return userPhono;
	}

	public void setUserPhono(String userPhono) {
		this.userPhono = userPhono;
	}
	
	
}
