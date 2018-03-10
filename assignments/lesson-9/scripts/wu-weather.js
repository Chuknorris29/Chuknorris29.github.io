
var requestURL = "https://api.wunderground.com/api/da7e8c870bb11040/conditions/q/MN/Franklin.json";
var request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();
request.onload = function() {
	var weatherInfo = request.response;
	/*weatherInfo = weatherInfo.replace("http://", "https://");*/
	console.log(weatherInfo);

	document.getElementById("current-cond-right").innerHTML = weatherInfo.current_observation.weather;
	document.getElementById("current-cond-left").innerHTML = weatherInfo.current_observation.weather;
	document.getElementById("feels-like").innerHTML = weatherInfo.current_observation.feelslike_f;
	document.getElementById("inputspeed").innerHTML = weatherInfo.current_observation.wind_mph;
	var x =  weatherInfo.current_observation.icon_url;
	var y = x.replace("http://", "https://");
	document.getElementById("current-img").src = y;
	document.getElementById("currentChill").innerHTML = weatherInfo.current_observation.windchill_f;
}

var requestURL2 = "https://api.wunderground.com/api/da7e8c870bb11040/forecast/q/MN/Franklin.json"
var request2 = new XMLHttpRequest();
request2.open("GET", requestURL2);
request2.responseType = "json";
request2.send();
request2.onload = function() {
	var weatherInfo2 = request2.response;
	console.log(weatherInfo2)

	document.getElementById("currentforecast").innerHTML = weatherInfo2.forecast.txt_forecast.forecastday["0"].fcttext

}
