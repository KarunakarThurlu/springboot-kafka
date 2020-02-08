package com.kafka.producer;

import java.util.Properties;

import org.apache.kafka.clients.producer.KafkaProducer;
import org.apache.kafka.clients.producer.Producer;
import org.apache.kafka.clients.producer.ProducerRecord;
import org.apache.kafka.clients.producer.RecordMetadata;

public class SynchronusKafkaProducer {
/*	public static void main(String[] args) {
		System.out.println("hello");
		String topicname="niharika";
		String key="key";
		String value="tony-niharika...............................tony-niharika";

		Properties props=new Properties();

		props.put("bootstrap.servers","tony:9091 ,tony:9092 ,tony:9093");
		props.put("key.serializer",   "org.apache.kafka.common.serialization.StringSerializer");
		props.put("value.serializer", "org.apache.kafka.common.serialization.StringSerializer");

		Producer<String,String> producer=new KafkaProducer<>(props);

		ProducerRecord<String,String> record=new ProducerRecord<String, String>(topicname, key, value);

		try {
			RecordMetadata metadata=producer.send(record).get();
			System.out.println("message is sent to partition no "+metadata.partition()+" and offset "+metadata.offset());
			System.out.println("=====synchronus message is send with success=====");
		} catch (Exception e) {
			e.printStackTrace();
			System.out.println("=====synchronus message is faild with Exception "+e.getMessage()+"=======");
		}finally {
			producer.close();
		}
		System.out.println("message is sending from java-producer to kafka topic");
	}*/
}
