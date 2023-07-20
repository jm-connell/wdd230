// select HTML elements in the document
const tempElement = document.querySelector('.weather-temp');
const conditionElement = document.querySelector('.weather-conditions');
const humidityElement = document.querySelector('.weather-humidity');
const forecastElement = document.querySelector('.weather-forecast');

// url for current weather
const urlCurrent = 'https://api.openweathermap.org/data/2.5/weather?q=Carlsbad&units=imperial&appid=eb29fd0d072afcd2312ac04a7e0bbb2e';

// get data for current
async function currentFetch() {
    try {
      const response = await fetch(urlCurrent);
      if (response.ok) {
        const currentData = await response.json();
        displayCurrent(currentData);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
}

// url for forecast
const urlForecast = 'https://api.openweathermap.org/data/3.0/onecall?lat=33.128780&lon=-117.314710&exclude=minutely,hourly,alerts&units=imperial&appid=b035c182740bd0af877a07c455f739fc';

// get data for forecast
async function forecastFetch() {
    try {
      const response = await fetch(urlForecast);
      if (response.ok) {
        const forecastData = await response.json();
        console.log(forecastData);
        displayForecast(forecastData);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
}

function displayCurrent(weatherData) {
  // update content of weather elements
  tempElement.innerHTML = `${weatherData.main.temp.toFixed(0)}`;
  conditionElement.innerHTML = weatherData.weather[0].description;
  humidityElement.innerHTML = weatherData.main.humidity;
}

function displayForecast(forecastData) {

  // arrays to store highs and lows
  const highTemps = [];
  const lowTemps = [];

  // loop 3 times to get data for next 3 days
  for (let i = 0; i < 3; i++) {
    highTemps.push(Math.round(forecastData.daily[i].temp.max, 0));
    lowTemps.push(Math.round(forecastData.daily[i].temp.min, 0));
  }

  // update html
  forecastElement.innerHTML = `${lowTemps[0]}/${highTemps[0]}, ${lowTemps[1]}/${highTemps[1]}, ${lowTemps[2]}/${highTemps[2]}`;

}


currentFetch();
forecastFetch();