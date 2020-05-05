package com.kafka.serviceimpl;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kafka.dao.IUserDataDao;
import com.kafka.iservice.IUserService;
import com.kafka.model.User;
import com.kafka.model.UsersData;
import com.kafka.repo.UserRepo;

@Service
public  class UserServiceImpl implements IUserService {
	
	@Autowired
	private UserRepo repo;
	
	@Autowired
	private IUserDataDao dao;
	
	//==========SQL Query Impl Methods========
	
	
	@Override
	public String saveUser(User user) {
		repo.save(user);
		return "User Register Successfully";
	}

	@Override
	public User getUserDataByEmail(String email) {
		
		return repo.findByUserEmail(email);
	}

	
	//========NOSQL Query Impl Methods===========
	
	
	@Override
	public String saveUserData(String data) {
		
		String response = null;
		JSONParser parser =new JSONParser();
		try {
			JSONArray arry = (JSONArray) parser.parse(data);
			UsersData ud=new UsersData();
			for(int i=0;i<arry.size();i++) {
				JSONObject obj=(JSONObject) arry.get(i);
				ud.setId((String) obj.get("id"));
				ud.setEmail((String) obj.get("email"));
				ud.setFirst_name((String) obj.get("first_name"));
				ud.setGender((String) obj.get("gender"));
				ud.setIp_address((String) obj.get("ip_address"));
				ud.setLast_name((String) obj.get("last_name"));
				response=dao.saveUserData(ud);
			}
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		return response;
	}

	@Override
	public UsersData getOneUser(String name) {
		
		return dao.getOneUser(name);
	}
	
	

}
