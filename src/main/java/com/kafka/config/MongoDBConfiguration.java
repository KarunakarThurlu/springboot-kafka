package com.kafka.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.config.AbstractMongoClientConfiguration;

import com.mongodb.client.MongoClient;
/*
@Configuration
public class MongoDBConfiguration  extends AbstractMongoClientConfiguration{
	
	@Value("${spring.data.mongodb.host}")
	private String host;
	
	@Value("${spring.data.mongodb.database}")
	private String db;
	
	@Override
	public MongoClient mongoClient() {
		// TODO Auto-generated method stub
		return (MongoClient) new com.mongodb.MongoClient(host);
	}

	@Override
	protected String getDatabaseName() {
		// TODO Auto-generated method stub
		return null;
	}

	

	
}*/
