console.log("code is running")
document.addEventListener("DOMContentLoaded", () => {
    import("https://cdn.jsdelivr.net/npm/axios@1.6.8/dist/esm/axios.min.js")
        .then(({ default: axios }) => {

        console.log("weather2.js loaded");

        const geoKey = "20fbacc25e03490886d5d8a343e08aea"; // Geoapify key
        const weatherKey = "d735019766msha61ffa7a431d86dp167e3ejsn0e54cb4f539c"; // RapidAPI key

        async function getCoordinates(city) {
            const url = `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(city)}&apiKey=${geoKey}`;
            const response = await axios.get(url);

            if (response.data.features.length > 0) {
                const { lat, lon } = response.data.features[0].properties;
                return { lat, lon };
            }
            throw new Error("City not found");
        }


        async function getWeather(lat, lon, cityName) {
            const options = {
                method: 'GET',
                url: 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather',
                params: { lat, lon },
                headers: {
                    'x-rapidapi-key': weatherKey,
                    'x-rapidapi-host': 'weather-by-api-ninjas.p.rapidapi.com'
                }
            };

            try {
                const response = await axios.request(options);
                const weather = response.data;
                console.log("Weather:", weather);

                const formatTime = unix => new Date(unix * 1000).toLocaleTimeString();

                document.getElementById("cityname").innerHTML = cityName;
                document.getElementById("cloud_pct").innerHTML = weather.cloud_pct;
                document.getElementById("feels_like").innerHTML = weather.feels_like;
                document.getElementById("humidity").innerHTML = weather.humidity;
                document.getElementById("humidity-2").innerHTML = weather.humidity;
                document.getElementById("max_temp").innerHTML = weather.max_temp;
                document.getElementById("min_temp").innerHTML = weather.min_temp;
                document.getElementById("sunrise").innerHTML = formatTime(weather.sunrise);
                document.getElementById("sunset").innerHTML = formatTime(weather.sunset);
                document.getElementById("temp").innerHTML = weather.temp;
                document.getElementById("temp-2").innerHTML = weather.temp;
                document.getElementById("wind_degrees").innerHTML = weather.wind_degrees;
                document.getElementById("wind_speed").innerHTML = weather.wind_speed;
                document.getElementById("wind_speed-2").innerHTML = weather.wind_speed;

            } catch (error) {
                console.error(" Weather API error:", error);
            }
        }
        const submitBtn = document.getElementById("submit");
        const cityInput = document.getElementById("city");

        submitBtn.addEventListener("click", async (e) => {
            e.preventDefault();
            console.log("Button clicked");

            try {
                const cityName = cityInput.value.trim();
                if (!cityName) {
                    alert("Please enter a city name");
                    return;
                }

                const { lat, lon } = await getCoordinates(cityName);
                console.log(` ${cityName} => lat: ${lat}, lon: ${lon}`);
                await getWeather(lat, lon, cityName);

            } catch (err) {
                console.error(" Error:", err.message);
                alert("Could not fetch weather. Try again.");
            }
        });

    });
});
