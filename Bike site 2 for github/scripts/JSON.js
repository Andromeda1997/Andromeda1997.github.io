var section = document.querySelector('div.myList');
var requestURL = 'https://api.myjson.com/bins/gz6xb';  //path to json file
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
	var serviceInfo = request.response;
	showServiceInfo(serviceInfo);	
}

/* Display all service information on services page: */
function showServiceInfo(jsonObj) {  
	var service = jsonObj['services'];
    
	/* organize service data */
	for (var i = 0; i < 4; i++) {
		var myArticle = document.createElement('article');
		var myH2 = document.createElement('h2');
		var para1 = document.createElement('p');
		var para2 = document.createElement('p');
				
		myH2.textContent = service[i].name; 
		para1.textContent = 'Cost: ' + service[i].cost;
		para2.textContent = 'Time to Complete: ' + service[i].time;
									
		/* prepare info to be displayed: */
		myArticle.appendChild(myH2);
		myArticle.appendChild(para1);
		myArticle.appendChild(para2);
				
		section.appendChild(myArticle);	
	}
}