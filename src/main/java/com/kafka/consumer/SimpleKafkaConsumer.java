package com.kafka.consumer;

import java.util.HashMap;
import java.util.Map;

import org.apache.kafka.clients.consumer.ConsumerConfig;
import org.apache.kafka.common.serialization.StringDeserializer;
import org.springframework.boot.autoconfigure.condition.ConditionalOnMissingBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.kafka.config.ConcurrentKafkaListenerContainerFactory;
import org.springframework.kafka.config.KafkaListenerContainerFactory;
import org.springframework.kafka.core.ConsumerFactory;
import org.springframework.kafka.core.DefaultKafkaConsumerFactory;

//@Configuration
public class SimpleKafkaConsumer {


	//@Bean
	KafkaListenerContainerFactory<?> kafkaListener(){
		ConcurrentKafkaListenerContainerFactory<String,String> factory=new ConcurrentKafkaListenerContainerFactory<>();
		factory.setConsumerFactory( consumerFactory());
		return factory;
	}

//	@ConditionalOnMissingBean(ConsumerFactory.class)
	ConsumerFactory<String,String> consumerFactory() {
		// TODO Auto-generated method stub
		Map<String, Object> configs=new HashMap<>();
		configs.put(ConsumerConfig.BOOTSTRAP_SERVERS_CONFIG,"tony:9091,tony:9092,tony:9093");
		configs.put(ConsumerConfig.KEY_DESERIALIZER_CLASS_CONFIG,StringDeserializer.class);
		configs.put(ConsumerConfig.VALUE_DESERIALIZER_CLASS_CONFIG,StringDeserializer.class);
		configs.put(ConsumerConfig.GROUP_ID_CONFIG, "defaultgroup");
		return new DefaultKafkaConsumerFactory<>(configs);
	}

	/*public static void main(String[] args) {
		String topicname="niharika";
		String groupname="group1";

		Properties props=new Properties();
		props.put("group.id",groupname);
		props.put("bootstrap.servers","tony:9091 ,tony:9092 ,tony:9093");
		props.put("key.deserializer",   "org.apache.kafka.common.serialization.StringDeserializer");
		props.put("value.deserializer", "org.apache.kafka.common.serialization.StringDeserializer");

		KafkaConsumer<String, String> consumer=new KafkaConsumer<>(props);

		consumer.subscribe(Arrays.asList(topicname));

		ConsumerRecords<String, String> data=consumer.poll(1000);
		data.forEach(s->System.out.println("=============consume data from kafka topic :"+s+"========="));
		System.out.println("===========consuming data done=========="+data.records("0"));
	}*/
}
