package com.kafka.dao;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

public interface IKafkaDataDao {
	
	public String getDataFromTopic(JSONArray json);

}
