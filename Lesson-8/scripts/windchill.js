var hightemp = (parseFloat(document.getElementById('high').innerHTML));
var lowtemp = (parseFloat(document.getElementById('low').innerHTML));
var windspeed = (parseFloat(document.getElementById('wind').innerHTML));
var tempF = (hightemp + lowtemp) / 2; //calculate average

var s = Math.pow(windspeed, 0.16);
var windChill = 35.74 + (0.6215 * tempF) - (35.75 * s) + (0.4275 * tempF * s);
		
//round to 1 decimal place:
var digits = 0;
var multiplier = Math.pow(10, digits);
windChill = Math.round(windChill * multiplier) / multiplier;   
		
//Output
document.getElementById('windchill').innerHTML = windChill + "°F";