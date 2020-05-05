package com.kafka.daoimpl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.MongoDbFactory;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.SimpleMongoClientDbFactory;
import org.springframework.data.mongodb.core.query.Criteria;
import  org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.TextCriteria;
import org.springframework.data.mongodb.core.query.TextQuery;
import org.springframework.stereotype.Repository;

import com.kafka.dao.IUserDataDao;
import com.kafka.model.UsersData;
import com.mongodb.client.MongoClients;

@Repository
public class UserDataDaoImpl implements IUserDataDao {

	@Autowired
	private MongoTemplate mongoTemplate;
	
	@Override
	public String saveUserData(UsersData usersdata) {
		mongoTemplate.insert(usersdata);
		return "done";
	}

	@Override
	public UsersData getOneUser(String useName) {
	    MongoOperations mongoOps = new MongoTemplate((MongoDbFactory) new SimpleMongoClientDbFactory(MongoClients.create(), "springboot"));
		Query query=new Query();
		query.addCriteria(Criteria.where("first_name").is(useName));
		UsersData data =mongoOps.findOne(new Query(Criteria.where("first_name").is(useName)), UsersData.class,"usersData");
		List<UsersData> list=mongoTemplate.findAll(UsersData.class);
		System.out.println("========================");
		HashMap<String, String> obj=new HashMap<>();
		for(UsersData d: list) {
			obj.put("domain_id",d.getId());
			obj.put("email", d.getEmail());
			obj.put("first_name",d.getFirst_name());
			System.out.println(obj);
		}
		System.out.println(list.size());
		
		return data;
	}

}
