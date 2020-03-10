window.onload = function(){
	setInterval(showClock,1000);
	this.getWeather();
}
function showClock(){

const deg = 6;
const hr = document.querySelector("[data-hour-hand]");
const mn = document.querySelector("[data-minute-hand]");
const sc = document.querySelector("[data-second-hand]");
// setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;
    hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg`;
   
// })
}

function getWeather() {

	var sandeep = ["hello","jell"];
	console.log(sandeep[0])

	console.log(typeof sandeep)

	const weather = {};
	var temperature;
	var response;

	const iconElement = document.querySelector(".weather-icon");
	
	date = new Date();
	document.getElementById('clock-day').innerHTML=date.getDate();
	const monthNames = ["Jan","Feb","Mar","Apr","May","Jun","Jul",
						"Aug","Sep","Oct","Nov","Dec"];

	const dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
	
	var dayName = dayNames[date.getDay()];
	document.getElementById('dayName').innerHTML = dayName;
	console.log(date.getMonth())
	var month = monthNames[date.getMonth()];
	document.getElementById('month').innerHTML = month;
	var day = date.getDate();
	document.getElementById('dayNum').innerHTML = day;



	//api key
	var key ="332f8de69feecff3bc8c5a3e3cc21526";
	const api = "http://openweathermap.org/data/2.5/city?q=";
	var cityName = "Kathmandu,np";
	console.log(api);
	console.log(date);
	// var sandeep = 'Hello'
	// console.log(sandeep)


// api.openweathermap.org/data/2.5/weather?q=London

	fetch("http://api.openweathermap.org/data/2.5/weather?q=Kathmandu,np&units=metric&appid=" + key).then(function(res){
		return res.json();

	})
	.then(
		function(data){
			console.log(data);
			console.log(data.name)
			console.log(data.sys.country)
			console.log(data.weather[0].desription)
			document.getElementById('weatherDesc').innerHTML = data.weather[0].description;

		  temperature = data.main.temp;
            document.getElementById('temp').innerHTML = temperature;
            console.log(temperature);
            document.getElementById('cityName').innerHTML = data.name;
        	
        	weather.iconId = data.weather[0].icon;
        	console.log(weather)

        	iconElement.innerHTML = 
        	`<img src="icons/${weather.iconId}.png" width="200px" height="150px"/>`;

		})



}

