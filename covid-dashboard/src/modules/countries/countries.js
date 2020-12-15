// import Queries from '../queries/Queries';
import { createCountriesHTML, getCountriesDomElement } from './countriesHTML';
import createCountryDOMElement from './createCountryDOMElement';
import { properties } from '../Properties/Properties';

let countriesElements = null;
let changeView = null;

const createTableCountries =(el) => {
  createCountriesHTML(el);

  countriesElements = getCountriesDomElement(el);

  el.addEventListener('click', (event) => {
    const { target } = event;
    if (target === el) return;

    properties.country = 'Belarus';

    changeView();
  });
};


function renderCountries(countries) {
  countries.sort((a,b) => b.arrData - a.arrData);
  countriesElements.list.innerHTML = '';
  countries.forEach((country) => {
    const elem = createCountryDOMElement(country);
    countriesElements.list.append(elem);
  })
}

function setChangeViewListener(fn) {
  changeView = fn;
}

export {
  createTableCountries,
  renderCountries,
  setChangeViewListener
}
