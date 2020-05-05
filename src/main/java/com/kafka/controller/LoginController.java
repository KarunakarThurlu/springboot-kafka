package com.kafka.controller;


import java.io.Console;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.kafka.iservice.IKafkaDataService;
import com.kafka.iservice.IUserService;
import com.kafka.model.User;
import com.kafka.model.UsersData;

@RestController
@RequestMapping("/kafka")
public class LoginController {

	@Autowired
	private IUserService service;

	@Autowired
	private IKafkaDataService kds;


	@Value("${spring.data.mongodb.database}")
	private String mongodb;

	//@Autowired
	private KafkaTemplate<String, String> kafkaTamplate;

	public String getIndexPage() {
		return "index";
	}

	@RequestMapping("/data")
	public String getData(@RequestBody String user) {
		JSONParser parser=new JSONParser();
		JSONObject obj=new JSONObject();
		try {
			JSONObject object=(JSONObject) parser.parse(user);
			User usr=new User();
			usr.setUserName((String) object.get("username"));
			usr.setUserEmail((String) object.get("useremail"));
			//usr.setUserGender((String) object.get("usergender"));
			usr.setUserPhono((String) object.get("userphoneno"));
			usr.setUserPwd((String)object.get("userpassword"));
			service.saveUser(usr);
			System.out.println("========"+object+"=======");
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		obj.put("success",true);
		return obj.toJSONString();
	}

	@RequestMapping("/login")
	public String loginCheck(@RequestBody String user) {
		JSONParser parser=new JSONParser();
		JSONObject obj=new JSONObject();
		try {
			JSONObject object=(JSONObject) parser.parse(user);
			User usr=new User();
			usr.setUserEmail((String) object.get("useremail"));
			usr.setUserPwd((String)object.get("userpassword"));
			User urd=service.getUserDataByEmail((String) object.get("useremail"));
			if(urd.getUserEmail().equals((String) object.get("useremail"))&& urd.getUserPwd().equals(object.get("userpassword"))) {
				obj.put("isvaliduser", true);
			}else {
				obj.put("isvaliduser", false);
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return obj.toJSONString();
	}

	@RequestMapping("/producer")
	public String  kafkaProducerToTopic(@RequestBody String rawdata) {
		System.out.println(rawdata);
		kafkaTamplate.send("niharika",rawdata);
		return "done";
	}


	String rawdata=null;
	//@KafkaListener(groupId = "group1",topics = "niharika")
	public String getDataFromTopic(String data) {
		System.out.println(data);
		rawdata=data;

		return rawdata;
	}
	//@RequestMapping("/consumer")
	public String kafkaTopicToConsumer() {
		String res=null;
		if(rawdata!=null) {
			//	res=kds.getDataFromTopic(rawdata);
		}
		return res;

	}

	@RequestMapping("/mongo")
	public String saveTOMongoDB(@RequestBody String data) {
		System.out.println("======"+data+"==========");
		String res=service.saveUserData(data);
		return res;
	}
	
	
	@RequestMapping("/getOneuser")
	@ResponseBody
	public UsersData getOneUser(@RequestParam("name") String name) {
		return service.getOneUser(name);
	}
	
	@GetMapping("/auth")
	public String getAuthoriseResource() {
		return "private resource";
	}
	@RequestMapping("/userByEmail")
	public String getUserDataByEmail(@RequestParam("email") String email) {
		UsersData user=service.getOneUser(email);
		System.out.println(user);
		return "response";
	}

}
