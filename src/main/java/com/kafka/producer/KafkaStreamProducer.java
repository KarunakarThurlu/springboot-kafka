package com.kafka.producer;

import java.util.HashMap;
import java.util.Map;

import org.apache.kafka.common.serialization.Serdes;
import org.apache.kafka.streams.StreamsBuilder;
import org.apache.kafka.streams.StreamsConfig;
import org.apache.kafka.streams.kstream.KStream;
import org.springframework.beans.factory.FactoryBean;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.kafka.KafkaProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.kafka.annotation.EnableKafka;
import org.springframework.kafka.annotation.EnableKafkaStreams;
import org.springframework.kafka.annotation.KafkaStreamsDefaultConfiguration;
import org.springframework.kafka.config.KafkaStreamsConfiguration;
import org.springframework.kafka.config.StreamsBuilderFactoryBean;
import org.springframework.kafka.config.StreamsBuilderFactoryBeanCustomizer;

//@Configuration
//@EnableKafka
//@EnableKafkaStreams
public class KafkaStreamProducer {

	//@Value("${kafka.topic.input}")
	private String input;

	//@Value("${kafka.topic.output}")
	private String output;

	//https://dzone.com/articles/spring-cloud-stream-with-kafka
	//https://github.com/spring-cloud/spring-cloud-stream-samples/tree/master/kafka-streams-samples
	/*@Bean(name = KafkaStreamsDefaultConfiguration.DEFAULT_STREAMS_CONFIG_BEAN_NAME)
	public KafkaStreamsConfiguration kafkaStreamConfiguration(KafkaProperties kafkaproperties) {
		Map<String, Object> configs=new HashMap<String, Object>();
		configs.put(StreamsConfig.BOOTSTRAP_SERVERS_CONFIG,kafkaproperties.getBootstrapServers());
		configs.put(StreamsConfig.APPLICATION_ID_CONFIG, kafkaproperties.getClientId());
		configs.put(StreamsConfig.DEFAULT_KEY_SERDE_CLASS_CONFIG,Serdes.String().getClass());
		configs.put(StreamsConfig.DEFAULT_VALUE_SERDE_CLASS_CONFIG,Serdes.Long().getClass());
		return new KafkaStreamsConfiguration(configs);
	}

	@Bean
	public KStream<String, Long> kStream(StreamsBuilder kStreamBuilder) {
		KStream<String, Long> stream = kStreamBuilder.stream(input);
		stream.filter((k, v) -> v % 2 == 0)
		.mapValues(v -> {
			System.out.println("Processing :: " + v);
			return v * v;
		})
		.to(output);
		return stream;
	}
	 @Bean
	    public StreamsBuilderFactoryBeanCustomizer customizer() {
	        return fb -> fb.setStateListener((newState, oldState) -> {
	            System.out.println("State transition from " + oldState + " to " + newState);
	        });
	    }*/

}
