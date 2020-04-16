let key = config.API_KEY;
var tablle = document.getElementById("srow");

function pl()
{
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'https://api.football-data.org/v2/competitions/2021/standings');
	xhr.setRequestHeader("X-Auth-Token", key);

	xhr.onload = function ()
	{
		if (this.status == 200)
		{
			let chop = JSON.parse(this.responseText);


	
		}
	}
	xhr.send();
}

pl();