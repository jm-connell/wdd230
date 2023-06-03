function displayWindChill() {
    /* Get temperature and wind speed */
    const temp = parseInt(document.querySelector(".temperature").textContent);
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

displayWindChill();