var tableBody = document.querySelector("tbody");
var requestURL = "https://chuknorris29.github.io/assignments/term-project/data/service-data.json";
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


