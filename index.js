/* This is where the JavaScript all
of the calculations will occur*/

// taking care of the reverse title
var reverseTitle = document.getElementById("titleCard").innerHTML;
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
for(var i = 0; i < planets.length; i++){
	var planetName = document.createElement("option");
	planetName.innerHTML = planets[i].planet;
	select.appendChild(planetName);
}

// Calculates the weight
function newWeight(){
	var weight = document.getElementById("weight").value;
	var something = document.getElementById("names");
	var planetSelected = something.options[something.selectedIndex].text;
	var planetPosition = whichOne(planetSelected);
	var notPronoun = "";
	// adds the word "the" for the sun and moon
	if (planetPosition === 0 || planetPosition === 4) notPronoun = "the ";
	document.getElementById("answer").innerHTML = "If you were on " + notPronoun + planetSelected +
		", you would weight " + (weight * planets[planetPosition].gravity).toFixed(2) + "lbs!";
}

// Finds the position of the of the array that the user selected and returns the position
function whichOne(name){
	for(var i = 0; 0 < planets.length; i++){
		if (name === planets[i].planet) return i;
	}
}

