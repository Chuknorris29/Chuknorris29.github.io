var high = parseInt(document.getElementById("inputhigh").innerHTML);
var low = parseInt(document.getElementById("inputlow").innerHTML);
var t = Math.round((high + low) / 2);
var s = parseInt(document.getElementById("inputspeed").innerHTML);
var f = Math.round(35.74 + (0.6215 * t) - (35.75 * Math.pow(s, 0.16)) + (0.4275 * t * Math.pow(s, 0.16)));

document.getElementById("currentChill").innerHTML = f;
