package com.kafka.dao;

public interface IVizualizationDao {
	public String getUsersData();
	public String getAttributesData();
	public String selectedAttributesData(String data);
	public String updateCovidData(String data);
	
}
