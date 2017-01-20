//get the LOGIN key from the MASTER key
function getLogin(master, redirect) {
	$.ajax({
		type: 'get',
		url: 'https://www.rlsmart.net/webservices/realsmart_access_server.php?method=getToken&arg1=' + master,
		dataType: 'xml',
		success: function(data, textStatus, jqXHR){
			var key = $(data).find('response')[0];
			var login = "https://www.rlsmart.net/sso/cloud/welcome_token.php?returnUrl=https%3A%2F%2Frlsmart.net%2Fmain%2F&token=" + $(key).text();
			$("#login").html('Click here to login (or copy it...)')

			if(redirect){
				$(location).attr("href", login);
			} else {
				$("#login").attr('href', login);
			}
		}
	});
}

//get the MASTER key
function getMaster(redirect) {
	$.ajax({
		type: 'post',
		url: 'http://www.rlsmart.net/api-rs2/member/auth/login',
		dataType: 'json',
		data: {
			short_code: $('#sso_shortcode').val(),
			username: $('#sso_login_username').val(),
			password: $('#sso_login_password').val()
		},
		success: function(data, textStatus, jqXHR){
			if(data.error == false){
				$("#master").html(data.member.hash_key);
				getLogin(data.member.hash_key, redirect);
			}else{
				alert("Something happened. Are you connected to the internet, or did you remember your password?");
			}
		}
	});
}

// Login Submit
$(document).on("click", "#sso_login_submit", function(event){
	getMaster(true);
});

// Get master
$(document).on("click", "#sso_get_master", function(event){
	getMaster(false);
});

//auto login with master
$(document).on("click", "#sso_master_submit", function(event){
	getLogin($('#sso_master_id').val(), true);
});

//get login url with master
$(document).on("click", "#sso_master_submit_url", function(event){
	getLogin($('#sso_master_id').val(), false);
});