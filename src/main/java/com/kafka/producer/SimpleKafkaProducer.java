package com.kafka.producer;

import java.util.Properties;

import org.apache.kafka.clients.producer.KafkaProducer;
import org.apache.kafka.clients.producer.Producer;
import org.apache.kafka.clients.producer.ProducerRecord;

public class SimpleKafkaProducer {
	
	public static void main(String[] args) {
		
		String topicname="niharika";
		String key="key";
		String value="tony-niharika";
		
		Properties props=new Properties();
		
		props.put("bootstrap.servers","tony:9091 ,tony:9092 ,tony:9093");
		props.put("key.serializer","org.apache.kafka.common.serilization.StringSerializer");
		props.put("value.serializer", "org.apache.kafka.common.serilization.StringSerializer");
		
		Producer<String,String> producer=new KafkaProducer<>(props);
		
		ProducerRecord<String,String> record=new ProducerRecord<String, String>(topicname, key, value);
		
		producer.send(record);
		producer.close();
		System.out.println("message is sending from java-producer to kafka topic");
		
	}
}
