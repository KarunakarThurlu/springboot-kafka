$(document).ready(function(){
	$("#submit").click(function(e){
		e.preventDefault();
		var name=$("#username").val()
		var email=$("#useremail").val();
		var phono=$("#userphoneno").val();
		var phono=$("#userpassword").val();
		if(name==""){
			$('#name').parent().append('<span class="error">Please enter your email address.</span>');
			$("#name").focus();
			return false;
		}
		var udata={
				username:$("#username").val(),
				useremail:$("#useremail").val(),
				userphoneno:$("#userphoneno").val(),
				userpassword:$("#userpassword").val()
				
		}
		console.log(udata);
		$.ajax({
			type:'POST',
			url:'/kafka/data',
			data:JSON.stringify(udata),
			dataType:'json',
			contentType: "application/json; charset=utf-8;",
			success:function(response){
				console.log(response)
				$("#reg")[0].reset();
			},
			error:function(response){
				console.log("erroer");
			}
		});
	});
});