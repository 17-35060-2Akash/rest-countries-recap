
const loadCountries = () => {
    const url = `https://restcountries.com/v3.1/all`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountries(data))
};


const displayCountries = (countries) => {
    console.log(countries[0]);
    const countriesHTML = countries.map(country => getCountryHTML(country));
    // console.log(countriesHTML[0]);
    const container = document.getElementById('countries');
    container.innerHTML = countriesHTML.join(' ');
};

const getCountryHTML = ({ name, flags, area, region }) => {
    return `
      <div>
      <h2 title="This is a Country Name.">${name.common}</h2>
      <h2>Area: ${area}</h2>
      <p>Continent:${region}</p>
      <img src="${flags.png}" />
      </div>
    `;
}
/* const getCountryHTML = country => {
    const { name, flags } = country;
    return `
      <div>
      <h2>${name.common}</h2>
      <img src="${flags.png}" />
      </div>
    `;
} */


loadCountries();