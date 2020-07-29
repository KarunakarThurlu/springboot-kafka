package com.kafka.consumer;

import org.springframework.context.annotation.Configuration;
import org.springframework.kafka.annotation.KafkaListener;

@Configuration
public class SimpleKafkaConsumer {

	String rawdata=null;
	//@KafkaListener(groupId = "group1",topics = "niharika")
	public String getDataFromTopic(String data) {
		System.out.println(data);
		rawdata=data;
		return rawdata;
	}
}
