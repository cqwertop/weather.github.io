async function getWeather() {
    try {
        const location = document.getElementById('location').value;
        const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`;
        const apiKey = e78f7858582d4cc38fe225627252101
        console.log('Fetching data from:', apiUrl);
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        
        console.log('Received data:', data);
        
        document.getElementById('temperature').textContent = `Temperature: ${data.current.temp_c}°C`;
        document.getElementById('wind-speed').textContent = `Wind Speed: ${data.current.wind_kph} kph`;
        document.getElementById('humidity').textContent = `Humidity: ${data.current.humidity}%`;
        document.getElementById('weather-image').src = data.current.condition.icon;
    } catch (error) {
        document.getElementById('temperature').textContent = 'Error fetching weather data';
        document.getElementById('wind-speed').textContent = '';
        document.getElementById('humidity').textContent = '';
        document.getElementById('weather-image').src = '';
        console.error('There has been a problem with your fetch operation:', error);
    }
}
