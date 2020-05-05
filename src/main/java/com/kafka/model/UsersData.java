package com.kafka.model;

import org.springframework.data.mongodb.core.mapping.Document;

@Document("usersData")
public class UsersData {
	
	
	private String domain_id;
	
	private String first_name;
	
	private String last_name;
	
	private String gender;
	
	private String email;
	
	private String ip_address;

	public UsersData() {
		super();
	}

	public String getId() {
		return domain_id;
	}

	public void setId(String id) {
		this.domain_id = id;
	}

	public String getFirst_name() {
		return first_name;
	}

	public void setFirst_name(String first_name) {
		this.first_name = first_name;
	}

	public String getLast_name() {
		return last_name;
	}

	public void setLast_name(String last_name) {
		this.last_name = last_name;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getIp_address() {
		return ip_address;
	}

	public void setIp_address(String ip_address) {
		this.ip_address = ip_address;
	}
	
	
}
