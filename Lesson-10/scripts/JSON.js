var section = document.querySelector('div.myList');
var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
	var townInfo = request.response;
	showTownInfo(townInfo, citynum);	
}

/* Display all towns information on home page: */
function showTownInfo(jsonObj, citynum) {  
	var cities = jsonObj['towns'];
    
	/* organize city data */
	for (var i = 0; i < totalCities; i++) {
		if (i === 2) { continue; } /* Do not display Placerton */
		var myArticle = document.createElement('article');
		var myH2 = document.createElement('h2');
		var para1 = document.createElement('p');
		var para2 = document.createElement('p');
		var para3 = document.createElement('p');
		var para4 = document.createElement('p');
		var myList = document.createElement('ul');
		
		if (totalCities == 1) {
			myH2.textContent = cities[citynum].name;
			para1.textContent = 'City Motto: ' + cities[citynum].motto;
			para2.textContent = 'Year Founded: ' + cities[citynum].yearFounded;
			para3.textContent = 'Current Population: ' + cities[citynum].currentPopulation;
			para4.textContent = 'Average Rainfall: ' + cities[citynum].averageRainfall;
		}
		else {
			myH2.textContent = cities[i].name; 
			para1.textContent = 'City Motto: ' + cities[i].motto;
			para2.textContent = 'Year Founded: ' + cities[i].yearFounded;
			para3.textContent = 'Current Population: ' + cities[i].currentPopulation;
			para4.textContent = 'Average Rainfall: ' + cities[i].averageRainfall;
		}
					
		/* prepare info to be displayed: */
		myArticle.appendChild(myH2);
		myArticle.appendChild(para1);
		myArticle.appendChild(para2);
		myArticle.appendChild(para3);
		myArticle.appendChild(para4);
		myArticle.appendChild(myList);
		
		if (citynum != null) { 
			/* citynum = number sent from page requesting data
			0 Franklin
			1 Greenville
			3 Springville
			*/
			/* loop through events and add them to a list*/
			var cityCalendar = cities[citynum].events;
		
			for (var j = 0; j < cityCalendar.length; j++) {
				var listItem = document.createElement('li');
				listItem.textContent = cityCalendar[j];
				myList.appendChild(listItem);
			}
		section.appendChild(myArticle); /* display information */	
		}
		if (citynum == null) {
			section.appendChild(myArticle); /* display information */	
		}
	}
}
