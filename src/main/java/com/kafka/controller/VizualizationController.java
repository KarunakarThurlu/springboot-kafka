package com.kafka.controller;

import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kafka.iservice.IVizualizationService;
import com.kafka.jwtutil.JwtUtil;
import com.kafka.model.User;


@RestController
@RequestMapping("/app")
@CrossOrigin
public class VizualizationController {

	@Autowired
	private IVizualizationService service;

	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private JwtUtil jwtUtil;


	@SuppressWarnings("unchecked")
	@RequestMapping("/login")
	public String getData(@RequestBody User user) throws Exception {
		JSONObject obj=new JSONObject();
		try {
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(user.getUserEmail(), user.getUserPwd()));
			final Authentication authentication = authenticationManager.authenticate( new UsernamePasswordAuthenticationToken(user.getUserEmail(),user.getUserPwd()));
			String token=jwtUtil.generateToken(authentication);
			obj.put("token", token);
			return obj.toJSONString();
		} catch (AuthenticationException e) {
			obj.put("message",e.getMessage().toString());
			return obj.toJSONString();
		}

	}


	@RequestMapping("/attributes")
	public String getAttributesData() {
		String attrs=service.getAttributesData();
		System.out.println(attrs);
		return attrs;
	}

	@RequestMapping("/selectedAttributes")
	public String selectedAttributes(@RequestBody String data) {
		System.out.println(data);
		String result=service.selectedAttributesData(data);
		return result;
	}

	@RequestMapping("/getusersdata")
	public String getUsersData() {
		return service.getUsersData();
	}

	@RequestMapping("/updatecoviddata")
	public String updateCovidData(@RequestBody String data) {
		System.out.println(data);
		return service.updateCovidData(data);
	}
	@RequestMapping("/savestoryboard")
	public String saveStoryBoard(@RequestBody String data) {
		System.out.println(data);
		String res=service.saveStoryBoard(data);
		return res;
	}
	
	@RequestMapping("/savereport")
	public String saveReport(@RequestBody String data) {
		System.out.println(data);
		String res=service.savaReport(data);
		return res;
	}
	
	@RequestMapping("/getsavedstoryboarddata")
	public String getSavedStoryboardData() {
		String res=service.getSavedStoryboardData();
		return res;
	}
	
	@RequestMapping("/getsavedreportsdata")
	public String getSaveReportdData() {
		String res=service.getSavedReportData();
		return res;
	}

	@RequestMapping("/viewstoryboard")
	public String viewStoryBoard(@RequestBody String data) {
		String res=service.viewStoryBoard(data);
		return res;
	}
	@RequestMapping("/viewreport")
	public String viewReport(@RequestBody String data) {
		String res=service.viewReport(data);
		return res;
	}
}
