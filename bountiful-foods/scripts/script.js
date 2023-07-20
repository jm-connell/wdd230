const date = new Date();

/* last modified for */
let lastModified = document.lastModified;
document.querySelector('.last-modified').textContent = lastModified;

/* hamburger button nav toggle */
function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

/* fill select options in drink form from json data*/
fetch('fruit.json')
  .then(response => response.json())
  .then(data => {
    /* get select input elements */
    const selectInputs = document.querySelectorAll('.fruit-select');

    /* add each fruit as an option */
    selectInputs.forEach(select => {
      data.forEach(fruit => {
        const option = document.createElement('option');
        option.value = fruit.value;
        option.textContent = fruit.name;
        select.appendChild(option);
      });
    });
});

function updateDrinkCount() {
  let counter = localStorage.getItem('drinkCounter');
  const countElement = document.querySelector('.drink-counter');
  countElement.innerHTML = `<strong>${counter}</strong>`;
  console.log('counter is at', counter);
}

updateDrinkCount();