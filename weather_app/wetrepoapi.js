async function getWeather(city, prefix) {

    try {
        const res = await fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, {
            method: "GET",
            headers: {
                "X-RapidAPI-Key": "d735019766msha61ffa7a431d86dp167e3ejsn0e54cb4f539c",
                "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com"
            }
        });
        const data = await res.json();
        document.getElementById(prefix + "-cloud").innerText = data.cloud_pct;
        document.getElementById(prefix + "-temp").innerText = data.temp;
        document.getElementById(prefix + "-feels").innerText = data.feels_like;
        document.getElementById(prefix + "-humidity").innerText = data.humidity;
        document.getElementById(prefix + "-min").innerText = data.min_temp;
        document.getElementById(prefix + "-max").innerText = data.max_temp;
        document.getElementById(prefix + "-wind").innerText = data.wind_speed;
        document.getElementById(prefix + "-deg").innerText = data.wind_degrees;
        document.getElementById(prefix + "-sunrise").innerText = data.sunrise;
        document.getElementById(prefix + "-sunset").innerText = data.sunset;

    } catch (err) {
        console.error(err);
    }
}

// Call for default cities
getWeather("Bangalore", "Bangalore");
getWeather("Kerala", "Kerala");
getWeather("Chennai", "Chennai");
getWeather("Hyderabad", "Hyderabad");
getWeather("Gujarat", "Gujarat");
getWeather("Goa", "Goa");
