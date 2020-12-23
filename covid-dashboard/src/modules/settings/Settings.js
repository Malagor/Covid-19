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

let popup;
let form;
const elements = {};

const showPopup = (el) => {
  // getting the size and position of the calling element
  const params = el.getBoundingClientRect();
  // getting the Width of the popup window
  const popupWidth = popup.clientWidth;

  popup.style.top = `${params.bottom}px`;
  popup.style.left = `${params.left - popupWidth}px`;
  popup.classList.toggle('open');
};

const getFormData = () => {
  let country = form.country.value;
  const population = form.population.checked;
  const period = form.period.checked;
  const type = form.type.value;

  country = (country === 'All World' || country === '') ? false : country;

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

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    getFormData();
  });
};

const setSettingToggleElement = (el) => {
  el.addEventListener('click', () => {
    showPopup(el);
  });
};

const updateStateSettingPopup = () => {
  let { country} = properties;
  const { population, period, type } = properties;

  country = country || 'All world';
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
