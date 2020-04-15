let  key = config.API_KEY;

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
			
			console.log(chop.standings[0].table[0]);
			console.log(chop.standings[0].table[0].team.name);
			console.log(chop.standings[0].table[0].points);
			console.log(chop.standings[0].table[0].goalsFor);
			console.log(chop.standings[0].table[0].goalsAgainst);
			console.log(chop.standings[0].table[0].goalDifference);


			for (i = 0; i < 2; i++)
			{
				console.log("POSITION: " + chop.standings[0].table[i].position)
				console.log("TEAM NAME: " + chop.standings[0].table[i].team.name);
				console.log("POINTS: " + chop.standings[0].table[i].points);
				console.log("GOALS FOR: " + chop.standings[0].table[i].goalsFor);
				console.log("GOALS AGAINST: " + chop.standings[0].table[i].goalsAgainst);
				console.log("GOALS DIFFERENCE: " + chop.standings[0].table[i].goalDifference);
			}
		}

	}
	xhr.send();
}

pl();
