#Introduction

Realsmart (The software) uses a Single sign-on system to login into both rlsmart and Google Services. However, Realsmart also has a "hash_hey" which allows anyone to request a login token for the website after going to this webpage with this URL.

By sending a POST request to:

>http://www.rlsmart.net/api-rs2/member/auth/login

personal details regarding your account is exposed.

*The following response is FAKE. Any relation to any school/institution is completely not random - I just chose the first thing on the list*

	{
		"error": false,
		"member": {
			"member_id": "1",
			"school_id": "1017",
			"type": "learner",
			"upn": "1",
			"username": "2010MauriceMoss",
			"short_code": "360",
			"first_name": "Maurice",
			"last_name": "Moss",
			"full_name": "Maurice Moss",
			"photo_path": "https://www.rlsmart.net/st_pictures/1017/1.png",
			"color_scheme": "gradient",
			"flash_login_uri": "https://www.rlsmart.net/main/ajax/log_into_dock.php",
			"webservice_login_uri": "https://www.rlsmart.net/webservices/realsmart_access_server.php?method=getToken&arg1=(Master Key)",
			"hash_key": "(Master Key)"
		}
	}
	
In the above FAKE response, a hash_key is exposed by the service. This key can then be send via a GET request to:

>https://www.rlsmart.net/webservices/realsmart_access_server.php?method=getToken&arg1=(Master Key)

This then sends a regular tempoary authentication code that can be found when logging into rlsmart regularly. However, this above link can be used infinitely, meaning that not a single password is required to authenticate the user.

##How to use:
1. Find your school/educational institution/whatever in the list at www.rlsmart.net
2. Click the "Get started" link, and copy the end of the url (Just after the forward-slash)
3. Open the "index.html" file, paste the school short URL into the "School short code" box
4. Enter your realsmart(TM) login details
5. Click "Get master code"
6. On subsequent visits to this site, simply pasting this "master code" into the box will allow you to login to realsmart with the code
7. If you would like to login to Google Services (also not affiliated with moustacheminer.com), just go to the corrosponding Google Application, and login with your normal Google School/Educational Institution/Whatever account.
