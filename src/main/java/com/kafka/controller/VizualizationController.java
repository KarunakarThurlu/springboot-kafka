package com.kafka.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kafka.iservice.IVizualizationService;


@RestController
@RequestMapping("/app")
@CrossOrigin(origins="http://localhost:3000")
public class VizualizationController {

	@Autowired
	private IVizualizationService service;
	
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
	@RequestMapping("/getsavedstoryboarddata")
	public String getSavedStoryboardData() {
		String res=service.getSavedStoryboardData();
		
		return res;
	}
	
	@RequestMapping("/viewstoryboard")
	public String viewStoryBoard(@RequestBody String data) {
		String res=service.viewStoryBoard(data);
		
		return res;
		
	}
}
