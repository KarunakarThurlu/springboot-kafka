package com.kafka.producer;

import java.util.HashMap;
import java.util.Map;
import java.util.Properties;

import org.apache.kafka.clients.producer.KafkaProducer;
import org.apache.kafka.clients.producer.Producer;
import org.apache.kafka.clients.producer.ProducerConfig;
import org.apache.kafka.clients.producer.ProducerRecord;
import org.apache.kafka.common.serialization.StringSerializer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.kafka.core.DefaultKafkaProducerFactory;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.core.ProducerFactory;

//@Configuration
public class SimpleKafkaProducer {
	
	//@Bean
	ProducerFactory<String, String> producerFactory(){
		Map<String,Object> configs=new HashMap<>();
		configs.put(ProducerConfig.ACKS_CONFIG, "all");
		configs.put(ProducerConfig.CLIENT_ID_CONFIG, "kafkaproducer");
		configs.put(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG,"tony:9091,tony:9092,tony:9093");
		configs.put(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG,StringSerializer.class);
		configs.put(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG,StringSerializer.class);
		
		return new DefaultKafkaProducerFactory<>(configs);
	}
	//@Bean
	KafkaTemplate<String, String> kafkaTemplate(){
		return new KafkaTemplate<>(producerFactory());
		
	}
	
	/*public static void main(String[] args) {
		
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
		
	}*/
}
