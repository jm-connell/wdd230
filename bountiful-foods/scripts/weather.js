// select HTML elements in the document
const tempElement = document.querySelector('.weather-temp');
const conditionElement = document.querySelector('.weather-conditions');
const humidityElement = document.querySelector('.weather-humidity');
const forecastElement = document.querySelector('.weather-forecast');

const url = 'https://api.openweathermap.org/data/2.5/weather?q=Carlsbad&units=imperial&appid=eb29fd0d072afcd2312ac04a7e0bbb2e';

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
}


function  displayResults(weatherData) {

    // update content of weather elements
    tempElement.innerHTML = `${weatherData.main.temp.toFixed(0)}`;
    conditionElement.innerHTML = weatherData.weather[0].description;
    humidityElement.innerHTML = weatherData.main.humidity;

}

apiFetch();