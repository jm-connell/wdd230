
function displayCards() {
    // get container div
    const cardContainer = document.querySelector('div.business-cards');

    fetch('./businesses.json')
        .then(response => response.json())
        .then(data => {
        data.businesses.forEach(business => {

            // create elements for each entry
            let card = document.createElement('section');
            let logo = document.createElement('img');
            let name = document.createElement('h2');
            let address = document.createElement('p');
            let phone = document.createElement('p');
            let website = document.createElement('p');
            let membership = document.createElement('p');

            // set logo img properties
            logo.setAttribute('src', business.logo);
            logo.setAttribute('alt', `Logo for ${business.name}`);
            logo.setAttribute('loading', 'lazy');
            logo.setAttribute('width',  '60');

            // set text content of text elements
            name.textContent = `${business.name}`;
            address.textContent = `${business.address}`;
            phone.textContent = `${business.phone}`;
            website.textContent = `${business.website}`;
            membership.textContent = `Membership Level: ${business.membershipLevel}`;

            // append children to parent card
            card.appendChild(logo);
            card.appendChild(name);
            card.appendChild(address);
            card.appendChild(phone);
            card.appendChild(website);
            card.appendChild(membership);

            // append new card to card container
            cardContainer.appendChild(card);

    });
})
.catch(error => {
  console.error('Error loading JSON:', error);
});
}

displayCards();