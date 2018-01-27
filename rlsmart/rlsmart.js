const getLogin = async (token, redirect) => {
	const data = await fetch(`https://www.rlsmart.net/webservices/realsmart_access_server.php?method=getToken&arg1=${token}`)
		.then(res =>
			new Promise(async (resolve, reject) => {
				const text = await res.text();
				const parser = new DOMParser();
				const xml = parser.parseFromString(text, 'text/xml');
				resolve(xml);
			})
		)

	self.data = data;
	const status = data.getElementsByTagName('status')[0].innerHTML;

	if (status === 'success') {
		const token = data.getElementsByTagName('response')[0].innerHTML;
		const link = `https://www.rlsmart.net/sso/cloud/welcome_token.php?returnUrl=https%3A%2F%2Frlsmart.net%2Fmain%2F&token=${token}`;
		if (redirect) {
			window.location.href = link;
		} else {
			document.getElementById('loginLink').innerHTML = 'Login';
			document.getElementById('loginLink').href = link
		}
		
	} else {
		document.getElementById('textDisplay').innerHTML = data.getElementsByTagName('message')[0].innerHTML.replace(/&lt;/g, '<').replace(/&gt;/g, '>');
	}
}

const searchParams = params => Object.keys(params).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(params[key])).join('&');

// Get the token
const getToken = async (redirect) => {
	const data = await fetch('https://www.rlsmart.net/api-rs2/member/auth/login', {
		method: 'post',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
		},
		body: searchParams({
			short_code: document.getElementById('sso_shortcode').value,
			username: document.getElementById('sso_login_username').value,
			password: document.getElementById('sso_login_password').value
		})
	}).then(res => res.json());

	console.log(data);

	if (data.error === false) {
		document.getElementById('textDisplay').innerHTML = data.member.hash_key;
		getLogin(data.member.hash_key, redirect);
	} else {
		alert(data.message);
	}
}

window.addEventListener('load', () => {
	console.log('Loaded!');
	// Login Submit
	document.getElementById('sso_login_submit').onclick = (event) => {
		getToken(true);
	};

	document.getElementById('sso_get_token').onclick = (event) => {
		getToken(false);
	};

	document.getElementById('sso_token_submit').onclick = (event) => {
		getLogin(document.getElementById('sso_token_id').value, true);
	};

	document.getElementById('sso_token_submit_url').onclick = (event) => {
		getLogin(document.getElementById('sso_token_id').value, false);
	};

	if (window.location.hash) {
		getLogin(window.location.hash.replace('#', ''), true)
	}
});
