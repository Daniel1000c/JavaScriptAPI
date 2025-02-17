$(document).ready(function () {
    $("#searchBtn").click(function () {
        let cityName = $("#inputBox").val().trim();

        if (cityName !== "") {
            //Fetch weather data using wttr.in
            let siteURL = `https://wttr.in/${cityName}?format=j1`;

            $.getJSON(siteURL, function (data) {
                
                //Check first if weather data is valid
                if (data && data.current_condition) {

                    //extract weather data
                    let city = data.nearest_area[0].areaName[0].value;
                    let temp = data.current_condition[0].temp_C;
                    let desc = data.current_condition[0].weatherDesc[0].value.toLowerCase();
                    let humidity = data.current_condition[0].humidity;

                    //Create weather icon path
                    let imgPath = "images/error.png";

                    switch(true) {
                        case desc.includes("sunny") :
                            imgPath = "images/sunny.png";
                            break;
                        case desc.includes("cloudy") :
                            imgPath = "images/cloudy.png";
                            break;
                        case desc.includes("rain") :
                            imgPath = "images/rainy.png";
                            break;
                        case desc.includes("snow") :
                            imgPath = "images/snowman.png";
                            break;
                        case desc.includes("thunder") :
                            imgPath = "images/thunderstorm.png";
                            break;
                        case desc.includes("wind") :
                            imgPath = "images/windy.png";
                            break;
                        default:
                            imgPath = "images/error.png";
                            break;
                    }

                    //Update weather Container
                    $("#cityName").text(city);
                    $("#temp").text(`Temperature: ${temp} °C`); //Temperature
                    $("#desc").text(`Description: ${desc}`); //Description
                    $("#hum").text(`Humidity: ${humidity} %`); //Humidity

                    //Link weather icon
                    $("#weatherIcon").attr("src", imgPath);

                    //Show weather container
                    $(".weatherResult").fadeIn();
                } else {
                    //Create error message
                    alert("Weather Data not Found!!!!");
                    //Hide weather container
                    $(".weatherResult").hide();
                }
            }).fail(function () {

                //Create error message
                alert("City not found!");
                $("#inputBox").val("");
                $("#inputBox").focus();
                $("#inputBox").css("border", "2px solid red");
                
                //Hide weather container
                $(".weatherResult").hide();
            });
        } else {
            alert("Please enter a city name!");
            $("#inputBox").focus();
            $("#inputBox").css("border", "2px solid red");

            //Hide weather container
            $(".weatherResult").hide();
        }
    });
});