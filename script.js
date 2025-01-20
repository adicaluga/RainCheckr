//API key
const apiKey = '390fef299780cf53b2aca2303adea2be';

//Pointing to document pieces
const searchBtn = document.getElementById('search-btn');
const cityInput = document.getElementById('city');
const stateInput = document.getElementById('state');
const countryInput = document.getElementById('country');
const weatherInfo = document.getElementById('weather-info');
const toggleUnitBtn = document.getElementById('toggle-unit-btn');
const useLocationBtn = document.getElementById('use-location-btn');

let currentUnit = 'C'; //Default to Celsius
let lastTempInCelsius = null; //To store the last temperature in Celsius

// Event listener for the "Show Local Area Temperature" button
useLocationBtn.addEventListener('click', async () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`
          );
          if (!response.ok) throw new Error('Unable to fetch weather data for your location.');
          const data = await response.json();
          displayWeather(data);
        } 
        catch (error) {
          alert(error.message);
        }
      },
      //Throw an error if the location was denied
      (error) => {
        alert('Location access denied. Please search manually.');
      }
    );
  }
  //If all else does not go through, fire an alert for an incompatible browser
  else {
    alert('Geolocation is not supported by your browser.');
  }
});

//Event listener for the search button
searchBtn.addEventListener('click', async () => {
  const city = cityInput.value;
  const state = stateInput.value;
  const country = countryInput.value;

  if (city && country) {
    try {
      let query = `q=${city}`;
      if (state) query += `,${state}`;
      query += `,${country}`;

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?${query}&units=metric&appid=${apiKey}`
      );

      if (!response.ok) throw new Error('City not found');
      const data = await response.json();
      displayWeather(data);
    } 
    catch (error) {
      alert(error.message);
    }
  } 
  else {
    alert('Please enter both city and country.');
  }
});

//Display the weather
function displayWeather(data) {
  const cityName = document.getElementById('city-name');
  const temperature = document.getElementById('temperature');
  const description = document.getElementById('description');
  const icon = document.getElementById('icon');

  //Display city and country name
  cityName.textContent = `Weather in ${data.name}, ${data.sys.country}`;

  //Store the temperature in Celsius
  lastTempInCelsius = data.main.temp;

  //Default display in Celsius
  temperature.textContent = `Temperature: ${lastTempInCelsius}°C`;

  //Display condition and weather icon
  description.textContent = `Condition: ${data.weather[0].description}`;
  icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

  //Show the weather icon once weather data is available
  icon.style.display = 'block';

  //Reset toggle to Celsius when new data is displayed
  currentUnit = 'C';
  toggleUnitBtn.textContent = 'Show Fahrenheit';
}

//Add functionality for the unit toggle button
toggleUnitBtn.addEventListener('click', () => {
  const temperature = document.getElementById('temperature');
  
  //When the button is clicked convert the temperatures mathematically
  if (currentUnit === 'C') {
    const tempInFahrenheit = (lastTempInCelsius * 9) / 5 + 32;
    temperature.textContent = `Temperature: ${tempInFahrenheit.toFixed(1)}°F`;
    currentUnit = 'F';
    toggleUnitBtn.textContent = 'Show Celsius';
  }
   
  else {
    temperature.textContent = `Temperature: ${lastTempInCelsius}°C`;
    currentUnit = 'C';
    toggleUnitBtn.textContent = 'Show Fahrenheit';
  }
});

function resetWeatherInfo() {
  const cityName = document.getElementById('city-name');
  const temperature = document.getElementById('temperature');
  const description = document.getElementById('description');
  const icon = document.getElementById('icon');

  cityName.textContent = '';
  temperature.textContent = '';
  description.textContent = '';
  icon.style.display = 'none'; //Hide the icon
}

//Reset weather info when the page loads, and also resets the weather
document.addEventListener('DOMContentLoaded', resetWeatherInfo);
