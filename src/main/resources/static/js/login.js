$(document).ready(function(){
	$("#login").click(function(e){
		e.preventDefault();
		//var name=$("#username").val()
		var email=$("#useremail").val();
		var phono=$("#userpassword").val();
		var udata={
				//username:$("#username").val(),
				useremail:$("#useremail").val(),
				userpassword:$("#userpassword").val()
				
		}
		console.log(udata);
		$.ajax({
			type:'POST',
			url:'/kafka/login',
			data:JSON.stringify(udata),
			dataType:'json',
			contentType: "application/json; charset=utf-8;",
			success:function(response){
				console.log(response)
				$("#login")[0].reset();
			},
			error:function(response){
				console.log("erroer");
			}
		});
	});
});