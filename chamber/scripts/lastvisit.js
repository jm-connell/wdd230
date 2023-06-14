// initialize display element and date
const timeDisplay = document.querySelector(".last-visit");
const time = date.getTime();

// get last visit time from localStorage
let lastTime = localStorage.getItem('lastTime');

// calculate days since last visit and display
const msDiff = time - lastTime;
const dayFloat = msDiff / 86400000;
timeDisplay.textContent = `${Math.round(dayFloat)}`;

// update localStorage
localStorage.setItem('lastTime', time);


