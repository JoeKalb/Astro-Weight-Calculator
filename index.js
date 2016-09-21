/* This is where the JavaScript all
of the calculations will occur*/

// taking care of the reverse title
var reverseTitle = 'rotaluclaC thgieW ortsA';
var len = reverseTitle.length;
var newTitle = "";
for (var j = 0; j < len; j++){
	newTitle += reverseTitle.charAt(len - 1 - j);
}
document.getElementById("titleCard").innerHTML = newTitle;

// defining the select drop down list and planet/gravity array
var select = document.getElementById("names")
var planets = [
  {planet: 'Sun', gravity: 27.9},
  {planet: 'Mercury', gravity: 0.377},
  {planet: 'Venus', gravity: 0.9032},
  {planet: 'Earth', gravity: 1},
  {planet: 'Moon', gravity: 0.1655},
  {planet: 'Mars', gravity: 0.3895},
  {planet: 'Jupiter', gravity: 2.640},
  {planet: 'Saturn', gravity: 1.139},
  {planet: 'Uranus', gravity: 0.917},
  {planet: 'Neptune', gravity: 1.148},
  {planet: 'Pluto', gravity: 0.06}
];

// creating the dropdown list
//var planetNameArray;
for(var i = 0; i < planets.length; i++){
	var planetName = document.createElement("option");
	planetName.innerHTML = planets[i].planet;
	planetNameArray = planets[i].planet;
	select.appendChild(planetName);
}

// Calculates the weight
function newWeight(){
	var weight = document.getElementById("weight").value;
	var something = document.getElementById("names");
	var planetSelected = something.options[something.selectedIndex].text;
	// change to accessing original array
	var planetNameArray = ['Sun', 'Mercury', 'Venus', 'Earth', 'Moon', 'Mars', 
		'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto'];

	var planetPostion = planetNameArray.indexOf(planetSelected);
	document.getElementById("answer").innerHTML = "If you were on " + planetSelected +
		", you would weight " + (weight * planets[planetPostion].gravity).toFixed(2) + "lbs!";
}
