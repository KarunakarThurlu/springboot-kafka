package com.kafka.producer;

import java.util.Properties;

import org.apache.kafka.clients.producer.Callback;
import org.apache.kafka.clients.producer.KafkaProducer;
import org.apache.kafka.clients.producer.Producer;
import org.apache.kafka.clients.producer.ProducerRecord;
import org.apache.kafka.clients.producer.RecordMetadata;

public class AsynchronusKafkaProducer {
	public static void main(String[] args) {
		System.out.println("hello");
		String topicname="niharika";
		String key="key";
		String value="learning apache kafka using springboot";

		Properties props=new Properties();

		props.put("bootstrap.servers","tony:9091 ,tony:9092 ,tony:9093");
		props.put("key.serializer",   "org.apache.kafka.common.serialization.StringSerializer");
		props.put("value.serializer", "org.apache.kafka.common.serialization.StringSerializer");

		Producer<String,String> producer=new KafkaProducer<>(props);

		ProducerRecord<String,String> record=new ProducerRecord<String, String>(topicname, key, value);


		producer.send(record,new MyProducerCallBack());

		producer.close();

		System.out.println("message is sending from java-producer to kafka topic");
	}
}
class MyProducerCallBack implements Callback{

	@Override
	public void onCompletion(RecordMetadata metadata, Exception exception) {
		if(exception!=null) 
			System.out.println("====Asynchronus message is faild with error :"+exception.getMessage()+"=========");
		else 
			System.out.println("====Asynchronus message is sendded successfully=======");


	}

}
