package com.kafka.dao;

public interface IVizualizationDao {
	public String getUsersData();
	public String getAttributesData();
	public String selectedAttributesData(String data);
	public String updateCovidData(String data);
	public String saveStoryBoard(String data);
	public String getSavedStoryboardData();
	public String viewStoryBoard(String data);
	public String saveReport(String data);
	public String getSavedReportdData();
	public String viewReport(String data);
	
}
