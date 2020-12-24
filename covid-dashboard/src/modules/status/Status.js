import { properties } from '../Properties/Properties';
import { updateApp } from '../mainApp/updataApp';
import { createListOfCountries } from '../settings/createListOfCountries';

import { localStorageCountryList } from '../mainApp/localStorageCountryList';
import { filterInputInPopup } from '../settings/filterInputInPopup';

let elementsDOM = null;
let listOfCountries;

setTimeout(() => {
  listOfCountries = createListOfCountries('.status__list', 'status__item');
}, 0);

const setCurrentDate = (date) => {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timezone: 'UTC',
  };
  elementsDOM.date.textContent = date.toLocaleString('en-US', options);
};

const setCount = (allPopulation = true) => {
    elementsDOM.count.value = allPopulation;
};

const setType = (typeData) => {
  elementsDOM.type.value = typeData;
};

const setCountry = (country) => {
  elementsDOM.country.value = country || 'All World';
};

const setPeriod = (period) => {
  elementsDOM.period.value = period;
};

const updateStatusBar = () => {
  setCountry(properties.country);
  setCount(properties.population);
  setPeriod(properties.period);
  setType(properties.type);
};

const createStatusBar = (el) => {
  el.innerHTML =
    `<div class="status__date"></div>
    <div class="status__box">
      <input class="status__country">
      <ul class="status__list status__list_hide"></ul>
    </div>
    <select id ="status__type">
      <option value="cases" class="cases">Cases</option>
      <option value="recovered" class="recovered">Recovered</option>
      <option value="deaths" class="deaths">Deaths</option>
    </select>
    <select class ="status__period">
      <option value="false">All time</option>
      <option value="true">Last day</option>
    </select>
    <select class="status__count">
      <option value="false">All population</option>
      <option value="true">Per 100k population</option>
    </select>
    <div ></div>`;

  const date = el.querySelector('.status__date');
  const country = el.querySelector('.status__country');
  const period = el.querySelector('.status__period');
  const count = el.querySelector('.status__count');
  const type = el.querySelector('#status__type');

  // change events
  period.addEventListener('change', () => {
    properties.period = !!period.selectedIndex;
    updateApp();
  });

  count.addEventListener('change', () => {
    properties.population = !!count.selectedIndex;
    updateApp();
  });

  type.addEventListener('change', () => {
    properties.type = type.value;
    updateApp();
  });

  country.addEventListener('click', () => {
    listOfCountries.classList.remove('status__list_hide');
    document.querySelectorAll('.status__item').forEach((item) => {
        item.addEventListener('click', () => {
          // console.log ('click');
          listOfCountries.classList.add('status__list_hide');
          country.value = item.innerText;

          let locCountry = item.innerText;
          if (locCountry === "All World" || locCountry === "") {
            locCountry = false;
          }
          properties.country = locCountry;
          updateApp();
        });
      });
  });

  country.addEventListener('keyup', (e) => {
    filterInputInPopup(elementsDOM.country, '.status__item');
    const list = localStorageCountryList(null, 'load').map((elem) => elem.country);
    list.unshift('All World');
    if (e.key === 'Enter') {
      if (list.includes(elementsDOM.country.value) || 'All World' || '') {
        listOfCountries.classList.add('status__list_hide');
        country.value = elementsDOM.country.value;

        let locCountry = elementsDOM.country.value;
        if (locCountry === "All World" || locCountry === "") {
          locCountry = false;
        }
        properties.country = locCountry;
        updateApp();
      } else {
        country.value = '';
      }
    } else {
      listOfCountries.classList.remove('status__list_hide');
    }
  });

  elementsDOM = {
    date,
    country,
    count,
    period,
    type,
  };

  setCurrentDate(new Date());
  updateStatusBar();

  return elementsDOM;
};


export {
  createStatusBar,
  updateStatusBar,
};
