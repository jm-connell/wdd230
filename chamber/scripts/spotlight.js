// get card div from HTML
const cardContainer = document.querySelector('section.spotlight');

// shuffle businesses
function getRandomBusinesses(array, numElements) {
  const shuffledArray = array.sort(() => Math.random() - 0.5);
  return shuffledArray.slice(0, numElements);
}

function getBusinesses() {
  return fetch('./businesses.json')
    .then(response => response.json())
    .then(data => {
        console.log(data.businesses)
      return data.businesses;
    })
    .catch(error => {
      console.error('Error loading businesses data:', error);
      return [];
    });
}

function addBusinesses() {
    
    getBusinesses().then(businessArray => {
        // filter businesses that are silver or gold membership
        const filteredBusinesses = businessArray.filter(business => business.membershipLevel == 'Silver' || business.membershipLevel == 'Gold');
        console.log(filteredBusinesses);
        
        // get random businesses
        // change num according to the number of cards needed
        const randomBusinesses = getRandomBusinesses(filteredBusinesses, 3);

        randomBusinesses.forEach(business => {
          // create elements for each entry
          let card = document.createElement('div');
          let name = document.createElement('h2');
          let logo = document.createElement('img');
          let slogan = document.createElement('p');
          let website = document.createElement('a');

          // set logo img properties
          logo.setAttribute('src', business.logo);
          logo.setAttribute('alt', `Logo for ${business.name}`);
          logo.setAttribute('width', '60');

          // set text content of text elements
          name.textContent = business.name;
          website.textContent = business.website;
          slogan.textContent = business.slogan;

          // append children to parent card
          card.appendChild(logo);
          card.appendChild(name);
          card.appendChild(slogan);
          card.appendChild(website);

          // append new card to card container
          cardContainer.appendChild(card);
        });
  });
}

addBusinesses();
