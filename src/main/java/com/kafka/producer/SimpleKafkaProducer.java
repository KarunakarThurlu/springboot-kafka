package com.kafka.producer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@Configuration
public class SimpleKafkaProducer {
	
	//@Autowired
	private KafkaTemplate< String, String> kafkaTemplate;
	
	//@RequestMapping("/producer")
	public String  kafkaProducerToTopic(@RequestBody String rawdata) {
		System.out.println(rawdata);
		kafkaTemplate.send("niharika",rawdata);
		return "done";
	}
}
