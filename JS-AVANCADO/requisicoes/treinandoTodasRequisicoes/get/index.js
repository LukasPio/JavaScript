const countriesSection = document.querySelector('.countries');

function createCard (country) {
 const card = document.createElement('div');
 card.classList.add('country');

 const countryName = document.createElement('h2');
 const name = country.name.common
 countryName.textContent = name;

 const flag = document.createElement('img');
 flag.src = country.flags.svg;
 flag.alt = countryName

 card.append(countryName, flag);
 document.querySelector('.countries').append(card)

}

async function getCountries() {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const countries = await response.json();
    countries.forEach((country) => {
        createCard(country)
    })
}

getCountries()