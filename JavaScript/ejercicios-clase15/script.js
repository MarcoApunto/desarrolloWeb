let data;

fetch('https://api.github.com/users/MarcoApunto')
	.then(res => res.json())
	.then(json => {
		data = json;
	})
	.then(() => {
		let pLogin = document.createElement("p");
		pLogin.textContent = data["login"]
		console.log();
		console.log(data["public_repos"]);
		console.log(data["avatar_url"]);
	})