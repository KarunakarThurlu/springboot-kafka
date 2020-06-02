package com.kafka.daoimpl;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.BatchPreparedStatementSetter;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.PreparedStatementSetter;
import org.springframework.jdbc.core.ResultSetExtractor;
import org.springframework.stereotype.Repository;

import com.kafka.dao.IVizualizationDao;

@Repository
public class VizualizationDaoImpl implements IVizualizationDao {

	@Autowired
	private JdbcTemplate template;

	JSONParser parser=new JSONParser();

	@SuppressWarnings("unchecked")
	@Override
	public String getUsersData() {
		
		String query=" select id, domain, first_name,last_name,email,ip_address from usersdata limit 10 ";
		List<JSONObject> reslt=template.query(query,(rs,rowNum)-> {
			JSONObject obj=new JSONObject();
			obj.put("id",rs.getString("id"));
			obj.put("domain",rs.getString("domain"));
			obj.put("first_name",rs.getString("first_name"));
			obj.put("last_name",rs.getString("last_name"));
			obj.put("email",rs.getString("email"));
			obj.put("ip_address",rs.getString("ip_address"));
			return obj;
		});
		return reslt.toString();
	}

	@SuppressWarnings("unchecked")
	@Override
	public String getAttributesData() {
		JSONArray attributes= new JSONArray();
		//attributes.addAll(Arrays.asList("id","domain","first_name","last_name","email","ip_address"));
		attributes.addAll(Arrays.asList("country_name","upto_today","conformed_cases","recovered_cases","deaths"));
		return attributes.toJSONString();
	}

	@SuppressWarnings({ "unchecked", "null" })
	@Override
	public String selectedAttributesData(String data) {
		List<JSONObject> finalresult = new ArrayList<>();
		JSONObject resultobj=new JSONObject();
		try {
			JSONObject result=new JSONObject();

			JSONObject obj=(JSONObject) parser.parse(data);
			String xaxis=(String) obj.get("xaxis");
			String yaxis=(String) obj.get("yaxis");

			JSONArray xaxisArray=new JSONArray();
			JSONArray yaxisArray=new JSONArray();
			JSONArray series=new JSONArray();

			resultobj.put("xaxistitle",xaxis);
			resultobj.put("yaxistitle",yaxis);
			
			finalresult.add(result);
			String aggr=(String) obj.get("aggrigation");
			String countquery=" select sum("+yaxis+") from covid19table";
			Integer count=template.queryForObject(countquery,Integer.class);
			resultobj.put("count",count);
			String query="select "+aggr+"( "+yaxis+") as aggrigation,"+yaxis+" as yaxis,"+xaxis+" as xaxis from covid19table group by "+xaxis+","+yaxis+" order by "+aggr+"( "+yaxis+") DESC limit 10";
			template.query(query,new ResultSetExtractor<List<JSONObject>>() {
				@SuppressWarnings("unchecked")
				@Override
				public List<JSONObject> extractData(ResultSet rs) throws SQLException, DataAccessException {
					List<JSONObject> list=new ArrayList<>();
					while(rs.next()) {
						xaxisArray.add(rs.getString("xaxis"));
						yaxisArray.add(rs.getString("yaxis"));
						series.add(rs.getInt("aggrigation"));
					}
					return list;
				}

			});
			resultobj.put("xaxis",xaxisArray);
			resultobj.put("yaxis",yaxisArray);
			resultobj.put("series",series);
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		System.out.println(resultobj.toJSONString());
		return resultobj.toJSONString();
	}

	@Override
	public String updateCovidData(String data) {
		try {
			List<JSONObject> parsed= (List<JSONObject>) parser.parse(data);
			System.out.println(parsed.size());
			System.out.println(parsed);
			//String query="insert into covid19table (country_name,upto_today,conformed_cases,recovered_cases,deths) values(?,?,?,?,?)";
			String query="update covid19table set upto_today=?, conformed_cases=?, recovered_cases=?, deaths=? where country_name=? ";
			template.batchUpdate(query,new BatchPreparedStatementSetter() {
				@Override
				public void setValues(PreparedStatement ps, int i) throws SQLException {
					JSONObject obj=(JSONObject)parsed.get(i);
					ps.setString(1,(String) obj.get("upto_today"));
					ps.setLong(2,(Long) obj.get("conformed_cases"));
					ps.setLong(3,(Long) obj.get("recovered_cases"));
					ps.setLong(4,(Long) obj.get("deaths"));
					ps.setString(5,(String) obj.get("country_name"));
				}
				@Override
				public int getBatchSize() {
					
					return parsed.size();
				}
			});
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return "done";
	}

	@Override
	public String saveStoryBoard(String data) {
		try {
			String vi=data;
			JSONObject obj=(JSONObject) parser.parse(data);
			String sname=(String) obj.get("storyboardname");
		    String query="insert into visualization(sb_name,visualization_details) values(?,?)";
		    template.update(query,sname,obj.toString());
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return "updated";
	}

	@Override
	public String getSavedStoryboardData() {
		String query="select sb_name from visualization";
		@SuppressWarnings("unchecked")
		List<JSONObject>result=template.query(query, (rs,rowNNum)->{
			JSONObject obj=new JSONObject();
			obj.put("sb_name",rs.getString("sb_name"));
			return obj;
		});
		System.out.println(result);
		return result.toString();
	}

	@Override
	public String viewStoryBoard(String data) {
		String res="";
		try {
			JSONObject obj=(JSONObject) parser.parse(data);
			String sb_name=(String) obj.get("sb_name");
			String query="select visualization_details from visualization where sb_name=?";
			res=template.queryForObject(query,new Object[] {sb_name},String.class);
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return res;
	}

}
