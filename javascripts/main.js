$(document).ready(function(){

	const apiKey = "";


	console.log("getting here? ");

	$("body").on("click", "#buttonPress", (e)=> {
		let zipCode = $("#zipCodeInput").val();
		console.log();
		loadWeatherData().then((result)=>{
			console.log(result);
		});
	});


	const loadWeatherData = (city)=> {
		// console.log(city);
		return new Promise ((resolve, reject) => {
			$.ajax(`http://api.openweathermap.org/data/2.5/forecast/daily?zip=04090,us&units=imperial&APPID=${apiKey}`)
			.done((data)=> resolve(data))
			.fail((error)=>reject("error", error));
		});
	};

	// const writeWeatherToDom = (result)=>{
	// 	let domString
	// }


});