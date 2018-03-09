var section = document.querySelector("section");
var requestURL = "http:byui-cit230.github.io/weather/data/towndata.json"
var request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();
request.onload = function() {
	var townsData = request.response;
	showtown(townsData);

}


function showtown(jsonObj) {
	var towns = jsonObj["towns"];


	for (var i = 0; i < towns.length; i++) {
		if ( i == 2) {
			i++
		}
		var myArticle = document.createElement("article");
		var myH3 = document.createElement("h3");
		var myPara1 = document.createElement("p");
		var myPara2 = document.createElement("p");
		var myPara3 = document.createElement("p");
		var myPara4 = document.createElement("p");
		var myPara5 = document.createElement("p");
		var myList = document.createElement("ul");

		myH3.textContent = towns[i].name;
		myPara1.textContent = "Town Motto: " + towns[i].motto;
		myPara2.textContent = "Year Founded: " + towns[i].yearFounded;
		myPara3.textContent = "Current Population: " + towns[i].currentPopulation;
		myPara4.textContent = "Average Rainfall: " + towns[i].averageRainfall +'"';
		myPara5.textContent = "Upcoming Events:";
		var events = towns[i].events;
		for (var j = 0; j < events.length; j++) {
			var listItem = document.createElement("li");
			listItem.textContent = events[j];
			myList.appendChild(listItem);
		}

		myArticle.appendChild(myH3);
		myArticle.appendChild(myPara1);
		myArticle.appendChild(myPara2);
		myArticle.appendChild(myPara3);
		myArticle.appendChild(myPara4);
		myArticle.appendChild(myPara5);
		myArticle.appendChild(myList);

		section.appendChild(myArticle);

	}
}
