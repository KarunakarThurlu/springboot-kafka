package com.kafka.daoimpl;

import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BatchPreparedStatementSetter;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.kafka.dao.IKafkaDataDao;

@Repository
public class KafkaDataDaoImpl implements IKafkaDataDao {
	
	@Autowired
	private JdbcTemplate jdbctemplate;

	@Override
	public String getDataFromTopic(JSONArray json) {
		// TODO Auto-generated method stub
		String sql="insert into  UsersData(Domain,First_Name,Last_Name,Email,Gender,Ip_address) values(?,?,?,?,?,?)";
		
		jdbctemplate.batchUpdate(sql,new BatchPreparedStatementSetter() {
			
			@Override
			public void setValues(PreparedStatement ps, int i) throws SQLException {
				// TODO Auto-generated method stub
				JSONObject object=(JSONObject) json.get(i);
				 ps.setString(1,(String) object.get("id"));
				 ps.setString(2,(String) object.get("first_name"));
				 ps.setString(3,(String) object.get("last_name"));
				 ps.setString(4,(String) object.get("email"));
				 ps.setString(5,(String) object.get("gender"));
				 ps.setString(6,(String) object.get("ip_address"));
				
			}
			
			@Override
			public int getBatchSize() {
				// TODO Auto-generated method stub
				return json.size();
			}
		});
		return  (String) new JSONObject().put("Succcess", "Done");
	}

}
