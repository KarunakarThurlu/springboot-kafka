package com.kafka.serviceimpl;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kafka.dao.IKafkaDataDao;
import com.kafka.iservice.IKafkaDataService;

@Service
public class KafkaDataServiceImpl implements IKafkaDataService {

	@Autowired
	private IKafkaDataDao kafkadao;
	
	@Override
	public String getDataFromTopic(String rawdata) {
		// TODO Auto-generated method stub
		String res = null;
		JSONParser parser =new JSONParser();
		try {
			JSONArray array=(JSONArray) parser.parse(rawdata);
			res=kafkadao.getDataFromTopic(array);
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return res;
	}

}
