/**
 *
 * Author: Alex Malagor <seo.dnja@mail.com>
 *
 * Module function: Setting popup
 *
 * */

import settingsHTML from './settingsHTML';
import { properties, setProperties } from '../Properties/Properties';
import { updateApp } from '../mainApp/updataApp';
import { createListOfCountries } from './createListOfCountries';
import { filterInputInPopup } from './filterInputInPopup';
import { localStorageCountryList } from '../mainApp/localStorageCountryList';

let popup;
let form;
const elements = {};
let currElem;
let listOfCountries;

setTimeout(() => {
  listOfCountries = createListOfCountries('.setting__list', 'setting-list-item');
}, 0);

const showPopup = (el) => {
  currElem = el;
  // getting the size and position of the calling element
  const params = el.getBoundingClientRect();
  // getting the Width of the popup window
  const popupWidth = popup.clientWidth;

  popup.style.top = `${params.bottom + window.pageYOffset}px`;
  popup.style.left = `${params.left - popupWidth + window.pageXOffset}px`;
  popup.classList.toggle('open');
};

const getFormData = () => {
  let country = form.country.value;
  const population = form.population.checked;
  const period = form.period.checked;
  const type = form.type.value;

  const list = localStorageCountryList(null, 'load').map((elem) => elem.country);
  if (list.includes(form.country.value) || country === 'All World') {
    country = (country === 'All World' || country === '') ? false : country;
  } else {
    listOfCountries.classList.add('setting__list_hide');
    return;
  }

  const data = {
    country,
    population,
    period,
    type,
  };

  setProperties(data);
  updateApp();
};

const createSettings = () => {
  document.body.insertAdjacentHTML('beforeend', settingsHTML());

  popup = document.querySelector('#popup');
  form = document.forms.settings;
  elements.country = form.country;
  elements.population = form.population;
  elements.period = form.period;
  elements.type = form.type;

  elements.country.addEventListener('click', () => {
    listOfCountries.classList.remove('setting__list_hide');
    document.querySelectorAll('.setting-list-item').forEach((item) => {
        item.addEventListener('click', () => {
          elements.country.value = item.innerText;
          listOfCountries.classList.add('setting__list_hide');
        });
      });
  });

  elements.country.addEventListener('keyup', (e) => {
    filterInputInPopup(elements.country, '.setting-list-item');
    const list = localStorageCountryList(null, 'load').map((elem) => elem.country);
    list.unshift('All World');
    if (e.code === 'Enter') {
      if (list.includes(elements.country.value)) {
        listOfCountries.classList.add('setting__list_hide');
      } else {
        elements.country.value = '';
      }
    }
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    getFormData();
    popup.classList.remove('open');
  });
};

const setSettingToggleElement = (el) => {
  el.addEventListener('click', () => {
    if(currElem !== el && popup.classList.contains('open')) {
      popup.classList.remove('open');
      setTimeout(() => {
        showPopup(el);
      }, 100);
    } else {
      showPopup(el);
    }
  });
};

const updateStateSettingPopup = () => {
  let { country} = properties;
  const { population, period, type } = properties;

  country = country || 'All World';
  elements.country.value = country;
  elements.period.checked = period;
  elements.population.checked = population;

  elements.type.forEach(el => {
    if (el.value === type) {
      el.checked = true;
    }
  });
};

export {
  createSettings,
  setSettingToggleElement,
  updateStateSettingPopup,
};
