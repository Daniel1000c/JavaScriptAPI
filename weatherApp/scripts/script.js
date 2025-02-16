//Create weather function
$(document).ready(function() {
    $("searchBtn").click(function() {
        //Create city, api key, and url
        let userCity = $("#inputBox").val();
        let apiKey = "" //Create api from openweathermap
        let url = "" //get url from openweathermap

        //Create ajax function
        $.ajax({
            url: url,
            method: "GET",
            success: function(data) {
                let weather = data.weather[0].main.tolowercase(); //Get Weather
                let temperature = data.main.temp; //Get Temperature
                let weatherDescription = data.weather[0].description; //Get Weather Description
                let weatherHumidity = data.main.humidity; //Get Humidity
                let statusIcon = 'images/error.png'; //Create default status img

                //Create weather images
                switch(weather) {
                    case "clear":
                        statusIcon = 'images/sunny.png';
                        break;
                    case "clouds":
                        statusIcon = 'images/cloudy.png';
                        break;
                    case "rain":
                        statusIcon = 'images/rainy.png';
                        break;
                    case "snow":
                        statusIcon = 'images/snowy.png';
                        break;
                    case "storm":
                        statusIcon = 'images/thunderstorm.png';
                        break;
                    case "light clouds":
                        statusIcon = 'images/lightClouds.jpeg';
                        break;
                    case "windy":
                        statusIcon = 'images/windy.png';
                        break;
                    default:
                        statusIcon = 'images/error.png'; //Default to error message
                }

                //Update weather ui

            },
            //Create error function
            error: function() {
                

            }
        });
    });
});