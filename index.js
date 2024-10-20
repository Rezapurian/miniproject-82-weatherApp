const apiKey = "1ce20ebcf594c407ba66fb34a8fb8265";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const weatherCondition = document.querySelector(".weather-condition");


async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        var data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    
    
        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "img/cloud.png";
            weatherCondition.innerHTML = "Cloudy";
        }
        else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "img/sun.png";
            weatherCondition.innerHTML = "Clear";
        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "img/rain.png";
            weatherCondition.innerHTML = "Rainy";
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "img/drizzle.png";
            weatherCondition.innerHTML = "Drizzle";
        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "img/mist.png";
            weatherCondition.innerHTML = "Mist";
        }
    
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
           
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})

checkWeather();