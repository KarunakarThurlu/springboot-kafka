package com.kafka.serviceimpl;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kafka.dao.IVizualizationDao;
import com.kafka.iservice.IVizualizationService;

@Service
public class VizualizationServiceImpl implements IVizualizationService {

	@Autowired
	private IVizualizationDao dao;
	
	@Override
	public String getUsersData() {
		String res=dao.getUsersData();
		return res;
	}

	@Override
	public String getAttributesData() {
		String attrs=dao.getAttributesData();
		return attrs;
	}

	@SuppressWarnings("unchecked")
	@Override
	public String selectedAttributesData(String data) {
		String result=dao.selectedAttributesData(data);
		/*JSONParser parser=new JSONParser();
		JSONArray xaxis=new JSONArray();
		JSONArray yaxis=new JSONArray();
		JSONObject response=new JSONObject();
		try {
			JSONArray array=(JSONArray) parser.parse(result);
			for(int i=0;i<array.size();i++) {
				JSONObject obj=(JSONObject) array.get(i);
				xaxis.add(obj.get("xaxis"));
				yaxis.add(obj.get("yaxis"));
			}
			response.put("xaxis",xaxis);
			response.put("yaxis",yaxis);
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}*/
		return result;
	}

	@Override
	public String updateCovidData(String data) {
		String res=dao.updateCovidData( data);
		return res;
	}

	@Override
	public String saveStoryBoard(String data) {
		String res=dao.saveStoryBoard(data);
		return res;
	}

	@Override
	public String getSavedStoryboardData() {
		String res=dao.getSavedStoryboardData();
		return res;
	}

	@Override
	public String viewStoryBoard(String data) {
		String res=dao.viewStoryBoard(data);
		System.out.println(res);
		String reusult=dao.selectedAttributesData(res);
		return reusult;
	}
	

}
