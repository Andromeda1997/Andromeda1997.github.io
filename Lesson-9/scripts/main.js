	// Get current conditions with first request:
	var weatherObject = new XMLHttpRequest();
	weatherObject.open('GET','http://api.wunderground.com/api/89f8b8af653f3faa/conditions/q/MN/Franklin.json', true);
	weatherObject.send();
	weatherObject.onload = function() {
		var weatherInfo = JSON.parse(weatherObject.responseText);
		console.log(weatherInfo);
	
		document.getElementById('place').innerHTML = weatherInfo.current_observation.display_location.full;
		document.getElementById('currentObservation').innerHTML = weatherInfo.current_observation.weather;
		document.getElementById('currentTemp').innerHTML = weatherInfo.current_observation.temp_f;
		document.getElementById('windSpeed').innerHTML = weatherInfo.current_observation.wind_mph;
		document.getElementById('feelsLike').innerHTML = weatherInfo.current_observation.feelslike_f;
		document.getElementById('forecast').innerHTML = weatherInfo.current_observation.forecast;
		document.getElementById('w_icon').src = weatherInfo.current_observation.icon_url;
	}
	
	// Get forecast info with second request:
	var weatherObject2 = new XMLHttpRequest();
	weatherObject2.open('GET','http://api.wunderground.com/api/89f8b8af653f3faa/forecast/q/MN/Franklin.json', true);
	weatherObject2.send();
	weatherObject2.onload = function() {
		var franklinWeather = JSON.parse(weatherObject2.responseText);
		console.log(franklinWeather);
			
		document.getElementById("forecast").innerHTML = franklinWeather.forecast.txt_forecast.forecastday[0].fcttext;
	}
	