document.addEventListener('DOMContentLoaded', () => {
    let city = document.getElementById('city');
    let weatherbtn = document.getElementById('btn');
    const weatherinfo = document.getElementById('weather-info');
    const citydisplay = document.getElementById('cityname')
    const tempdisplay = document.getElementById('temperature')
    const descriptiondisplay = document.getElementById('description')
    const errormsg = document.getElementById('error')
    const API_KEY = "3dcf9912fb2fe59757b53204bd2c5fad";
    weatherbtn.addEventListener('click', async () => {
        const cityreq = city.value.trim();
        if (!cityreq) return;
        //it may throw an error
        // server/database is always in another country

        try {
            const weatherData = await fetchWeatherData(cityreq);
            displayWeatherData(weatherData);
        } catch (error) {
            showError();
        }
    })

    async function fetchWeatherData(cityreq) {
        //get data
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityreq}&units=metric&appid=${API_KEY}`
        const response = await fetch(url);
        console.log(typeof response)
        console.log("Response", response);
        if (!response.ok) {
            throw new Error("City Not Found")
        }
        const data = await response.json();
        console.log(data)
        return data;

    }
    function displayWeatherData(data) {
        console.log(data);
        const { name, main, weather } = data
        citydisplay.textContent = name;
        tempdisplay.textContent = `Temperature : ${main.temp}°C`
        descriptiondisplay.textContent = `Weather : ${weather[0].description}`
        weatherinfo.classList.remove('hidden')
        //display the data
    }
    function showError() {
        weatherinfo.classList.add('hidden')
        errormsg.classList.remove('hidden')
    }
})