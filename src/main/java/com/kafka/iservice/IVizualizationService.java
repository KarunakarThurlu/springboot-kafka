package com.kafka.iservice;

public interface IVizualizationService {
	public String getUsersData();
	public String getAttributesData();
	public String selectedAttributesData(String data);
	public String updateCovidData(String data);
	public String saveStoryBoard(String data);
	public String getSavedStoryboardData();
	public String viewStoryBoard(String data);
	public String savaReport(String data);
	public String getSavedReportData();
	public String viewReport(String data);
}
