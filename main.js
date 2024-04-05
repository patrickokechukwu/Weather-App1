document.addEventListener('DOMContentLoaded', () => {
    // Function to fetch weather data from an API
    const fetchWeatherData = async (city) => {
        const apiKey = 'YOUR_API_KEY';
        const apiUrl = https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey};

        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    };

    // Function to update weather information on the page
    const updateWeatherInfo = async (city) => {
        const weatherData = await fetchWeatherData(city);
        if (weatherData) {
            const weatherInfo = document.querySelector('.weather-info');
            weatherInfo.innerHTML = `
                <h2>${city}</h2>
                <p>Temperature: ${weatherData.main.temp}°C</p>
                <p>Description: ${weatherData.weather[0].description}</p>
            `;
        }
    };

    // Update weather information for a default city
    updateWeatherInfo('London');
});