fahrenheit = document.querySelector("#fahrenheit-ip");
celsius = document.querySelector("#celsius-ip");
tempConvert = document.querySelector("#temp-conv-btn");

centimeter = document.querySelector("#centimeter-ip");
meter = document.querySelector("#meter-ip");
kilometer = document.querySelector("#kilometer-ip");
lengthConvert = document.querySelector("#length-conv-btn");

var tempSwitch = true
var lengthSwitch = 1

function changeFocus1(val) {
	tempSwitch = val;
}

function changeFocus2(val) {
	lengthSwitch = val;
}

tempConvert.addEventListener
(
	"click",
	() =>
	{
		if(tempSwitch == 1)
			fahrenheit.value = (parseInt(celsius.value) * 1.8) + 32;
		else
			celsius.value = (parseInt(fahrenheit.value) - 32) / 1.8;
	}
);
