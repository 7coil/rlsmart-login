# rlsmart-login

The GNU GPLv3 applies to all files included in this repository
A full copy of this licence can be found in licence.md

The markdown version of this licence is by TheFox, and can be found here: https://github.com/TheFox/GPLv3.md

**REALSMART LEARNING LTD (UK Company 05143141) are NOT affliated with this piece of software.**

#Disclaimer:
MOUSTACHEMINER.COM IS:

**NOT AFFILAITED WITH THIS COMPANY**  
**NOT ASSOCIATED WITH THIS COMPANY**  
**NOT AUTHORISED TO RELEASE THIS MATERIAL BY THIS COMPANY**  
**NOT ENDORSED WITH THIS COMPANY**  
**NOT SPONSORED BY THIS COMPANY**  
**ARE NOT AFFILIATED WITH ANY REGISTERED, UNREGISTERED OR COPYRIGHTS THAT THIS COMPANY MAY HOLD**  
*(in any way, shape or form in all potential cases in all measurable dimensions and universes, even those that may not exist)*

After this point, any reference to "REALSMART" is referring to the software, found at "www.rlsmart.net" and NOT the business.

#Additional disclaimers
MOUSTACHEMINER.COM PROVIDES NO WARRANTY TO WHAT HAPPENS TO YOUR REALSMART ACCOUNT - PLEASE READ THE GNU GENERAL PUBLIC LICENCE (VERISON 3) FOR MORE DETAILS.
moustacheminer.com has NO guarentee that your personal details will be kept secret - Although the source code is placed here on GitHub, it is advised to only use this software on personal software with accounts you are authorised to use.

	rlsmart-login Master Code Identifier
	Copyright (C) 2017  moustacheminer.com
	
	This program is free software: you can redistribute it and/or modify
	it under the terms of the GNU General Public License as published by
	the Free Software Foundation, either version 3 of the License, or
	(at your option) any later version.
	
	This program is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	GNU General Public License for more details.
	
	You should have received a copy of the GNU General Public License
	along with this program.  If not, see <http://www.gnu.org/licenses/>.
	
#End of Disclaimers:
moustacheminer.com provides no guarentee that you won't be eaten by space aliens.

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

> moustacheminer.com provides NO warranty to whatever happens to your realsmart account - Please read the source code before using to make sure no personal information is sent to malicious people.

5. Click "Get master code"

> This "master code" can be used to login to realsmart without any password authentication of any sort. It's like leaving a locked door with a button to open it.

6. On subsequent visits to this site, simply pasting this "master code" into the box will allow you to login to realsmart with the code
7. If you would like to login to Google Services (also not affiliated with moustacheminer.com), just go to the corrosponding Google Application, and login with your normal Google School/Educational Institution/Whatever account.
