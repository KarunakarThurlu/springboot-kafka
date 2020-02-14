package com.kafka.repo;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.kafka.model.UsersData;

@Repository
public interface UsersDataRepo extends MongoRepository<UsersData, Long>{

}
