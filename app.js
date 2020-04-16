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

			for (i = 0; i < 20; i++)
			{
				var tr = document.createElement("tr");

				var tposition=chop.standings[0].table[i].position;
				var tteam=chop.standings[0].table[i].team.name;
				var tgoalsfor=chop.standings[0].table[i].goalsFor;
				var tgoalsagainst=chop.standings[0].table[i].goalsAgainst;
				var tgoalsdifference=chop.standings[0].table[i].goalDifference;
				var tpoints=chop.standings[0].table[i].points;

				// adding the created elements to a object with a class name
				tablle.appendChild(tr);
				var t1= tr.appendChild(document.createElement("td"));
				var t2= tr.appendChild(document.createElement("td"));
				var t3= tr.appendChild(document.createElement("td"));
				var t4= tr.appendChild(document.createElement("td"));
				var t5= tr.appendChild(document.createElement("td"));
				var t6= tr.appendChild(document.createElement("td"));

				t1.innerHTML=tposition;
				t2.innerHTML=tteam;
				t3.innerHTML=tgoalsfor;
				t4.innerHTML=tgoalsagainst;
				t5.innerHTML=tgoalsdifference;
				t6.innerHTML=tpoints;
			
			}
	
		}
	}
	xhr.send();
}

pl();