var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.querySelector(".random");

newRandomGradient();

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

//Later, try to get a random bg generator using this,
// since technically you haven't learned about switches.
// function randomBgColor() {
// 	var x = Math.floor(Math.random() * 256);
// 	var y = Math.floor(Math.random() * 256);
// 	var z = Math.floor(Math.random() * 256);
// 	var bgColor = "rgb(" + x + "," + y + "," + z + ")";
// 	console.log(bgColor);
// 	return bgColor;
// }

function randomGradient() {
	var color1 = {
	r: Math.floor(Math.random() * 256),
	g: Math.floor(Math.random() * 256),
	b: Math.floor(Math.random() * 256)
	};
	var color2 = {
	r: Math.floor(Math.random() * 256),
	g: Math.floor(Math.random() * 256),
	b: Math.floor(Math.random() * 256)
	};
	color1.rgb = "rgb(" + color1.r + "," + color1.g + "," + color1.b + ")";
	color2.rgb = "rgb(" + color2.r + "," + color2.g + "," + color2.b + ")";
	return "linear-gradient(to right, "
	+ color1.rgb
	+ ", "
	+ color2.rgb
	+ ")";
}



function newRandomGradient() {
	body.style.background = randomGradient();
	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

random.addEventListener("click", newRandomGradient);




