// get form and output div elements
const form = document.querySelector('.drink-form');
const outputElement = document.querySelector('.form-output');

// get health info of 3 fruits (unfinished)
function getHealth(fruit1, fruit2, fruit3) {
    const url = 'fruit.json';
    var healthData = [];

    // Fetch the JSON file
    fetch(url)
      .then(response => response.json())
      .then(data => {
        
      })
      .catch(error => {
        console.error('Error fetching JSON:', error);
      });

    // return array of health info
}

function getFormData() {

    event.preventDefault();

    // get form data
    const firstName = document.querySelector('#first-name').value;
    const email = document.querySelector('#email').value;
    const phone = document.querySelector('#phone').value;

    const fruit1Select = document.querySelector('#fruit1');
    const fruit1 = fruit1Select.options[fruit1Select.selectedIndex].textContent;

    const fruit2Select = document.querySelector('#fruit2');
    const fruit2 = fruit2Select.options[fruit2Select.selectedIndex].textContent;

    const fruit3Select = document.querySelector('#fruit3');
    const fruit3 = fruit3Select.options[fruit3Select.selectedIndex].textContent;


    const instructions = document.querySelector('#special-instructions').value;
    const submitDate = document.querySelector('#submit-date').value;

    // get health data for each fruit, returns an array
    const fruit1Data = getHealth(fruit1);
    const fruit2Data = getHealth(fruit2);
    const fruit3Data = getHealth(fruit3);

    // create output elements
    let nameElement = document.createElement('h3');
    let emailElement = document.createElement('p');
    let phoneElement = document.createElement('p');
    let fruitElement = document.createElement('p');
    let instructionsElement = document.createElement('p');

    // add content to output elements
    nameElement.innerHTML = `Thanks for creating a drink ${firstName}. Make sure we got everything right:`;
    emailElement.innerHTML = `Email: ${email}`;
    phoneElement.innerHTML = `Phone: ${phone}`;
    fruitElement.innerHTML = `Fruits: ${fruit1}, ${fruit2}, ${fruit3}`;
    instructionsElement.innerHTML = `Special instructions: ${instructions}`;

    // append elements to parent div
    outputElement.appendChild(nameElement);
    outputElement.appendChild(emailElement);
    outputElement.appendChild(phoneElement);
    outputElement.appendChild(fruitElement);
    outputElement.appendChild(instructionsElement);

    // display output div
    outputElement.style.display = 'block';

    // update counter in local storage
    let counter = localStorage.getItem('drinkCounter');

    if (!counter) {
      counter = 0;
    }

    counter++;

    localStorage.setItem('drinkCounter', counter);
    console.log('counter is at', counter);

}




// event listener
form.addEventListener('submit', getFormData);