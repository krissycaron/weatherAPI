$(document).ready(function(){

	const apiKey = "";

	console.log("getting here? ");

	$("body").on("click", "#buttonPress", (e)=> {
		console.log("button clicked");
		loadWeatherData().then((result)=>{
			console.log(result);
		});
	});


	const loadWeatherData = (city)=> {
		// console.log(city);
		return new Promise ((resolve, reject) => {
			$.ajax(`http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=${apiKey}`)
			.done((data)=> resolve(data))
			.fail((error)=>reject("error", error));
		});
	};
 	// loadWeatherData();

});