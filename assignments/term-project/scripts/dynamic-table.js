var section = document.querySelector("section");
var requestURL = "data/service-data.json";
var request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();
request.onload = function() {
	var townsData = request.response;
	console.log(townsData);
	showtown(townsData);


}


function showtown(jsonObj) {
	var weatherTowns = jsonObj["towns"];


	for (var i = 0; i < weatherTowns.length; i++) {
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

		myH3.textContent = weatherTowns[i].name;
		myPara1.textContent = "Town Motto: " + weatherTowns[i].motto;
		myPara2.textContent = "Year Founded: " + weatherTowns[i].yearFounded;
		myPara3.textContent = "Current Population: " + weatherTowns[i].currentPopulation;
		myPara4.textContent = "Average Rainfall: " + weatherTowns[i].averageRainfall +'"';
		myPara5.textContent = "Upcoming Events:";
		var events = weatherTowns[i].events;
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


/*
var tableBody = document.querySelector("tbody");
var requestURL = "data/service-data.json";
var request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();
request.onload = function() {
	var serviceData = request.response;

	console.log(serviceData);
	showservice(serviceData);


}


function showservice(jsonObj) {
	var repairService = jsonObj["services"];


	for (var i = 0; i < repairService.length; i++) {

		var tableRow = document.createElement("tr");
		var tableData1 = document.createElement("td");
		var tableData2 = document.createElement("td");
		var tableData3 = document.createElement("td");

		tableData1.textContent = repairService[i].name;
		tableData2.textContent = repairService[i].cost;
		tableData3.textContent = repairService[i].hour + "Hour(s)";


		tableRow.appendChild(tableData1);
		tableRow.appendChild(tableData2);
		tableRow.appendChild(tableData3);

		tableBody.appendChild(tableRow);

	}
}

*/
