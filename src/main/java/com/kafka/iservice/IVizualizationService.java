package com.kafka.iservice;

public interface IVizualizationService {
	public String getUsersData();
	public String getAttributesData();
	public String selectedAttributesData(String data);
	public String updateCovidData(String data);
}
