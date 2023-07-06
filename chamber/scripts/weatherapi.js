// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const windSpeed = document.querySelector('.wind-speed');

const url = 'https://api.openweathermap.org/data/2.5/weather?zip=48603,us&units=imperial&appid=eb29fd0d072afcd2312ac04a7e0bbb2e';

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
    displayWindChill();
}

function displayWindChill() {
    /* Get temperature and wind speed */
    const temp = parseInt(document.querySelector("#current-temp").textContent);
    const wind = parseInt(document.querySelector(".wind-speed").textContent);

    if (temp <= 50 && wind > 3) {
        /* Calculate wind chill */
        const chill = 35.74 + 0.6215 * temp - 35.75 * wind ** 0.16 + 0.4275 * temp * wind ** 0.16;
        /* Display wind chill in weather panel */
        document.querySelector(".wind-chill").textContent = Math.round(chill);
    } else {
        document.querySelector(".wind-chill").textContent = "N/A";
    }
}

function  displayResults(weatherData) {

    // update temp and wind speed
    currentTemp.innerHTML = `${weatherData.main.temp.toFixed(0)}`;
    windSpeed.innerHTML = `${weatherData.wind.speed}`

    // add weather icon
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;

    // set icon attributes and description
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
}

apiFetch();