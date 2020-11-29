var cityName = document.querySelector("#city-name");
var tempDiv = document.querySelector("#temp-div");
var humidityDiv = document.querySelector("#humidity-div");
var windDiv = document.querySelector("#wind-div");
var searchBar = document.querySelector("#search-bar").value;
var searchBtn = document.querySelector("#searchBtn");

var Cities = [];


searchBtn.addEventListener("click", function () {
  var searchBar = document.querySelector("#search-bar").value;
  event.preventDefault()
  
  console.log(searchBtn);
  getWeather(searchBar);
  console.log(searchBar)
})
var getWeather = function (searchBar) {
    
    apiKey = "b6d61edc3955b37ce40eb374a1ccb0cb"
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + searchBar + "&units=imperial" + "&appid=" + apiKey)
    .then(function (response) {
      response.json().then(function (data) {
        console.log(data);

        var name = data.name;
        var temp = data.main.temp;
        var humidity = data.main.humidity;
        var windSpeed = data.wind.speed;
        cityName.innerText = name;
        tempDiv.innerText = ""
        tempDiv.innerText = temp + "\u00B0F";
        humidityDiv.innerText = humidity + "% humidity";
        windDiv.innerText = windSpeed + "MPH";

      }); 
      });
    }



