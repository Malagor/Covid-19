import { properties } from '../Properties/Properties';
import { updateApp } from '../mainApp/updataApp';

let elementsDOM = null;

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
  // if (allPopulation) {
  //   elementsDOM.count.textContent = 'Per 100k population';
  // } else {
  //   elementsDOM.count.textContent = 'All population';
    elementsDOM.count.value = allPopulation;
  // }
};

const setType = (typeData) => {
  // const type = typeData.charAt(0).toUpperCase() + typeData.slice(1);
  // elementsDOM.type.className = `${typeData}`;

  elementsDOM.type.value = typeData;
};

const setCountry = (country) => {
  elementsDOM.country.value = country || 'All World';
};

const setPeriod = (period) => {
  // let periodLoc;
  // if ( typeof period === 'boolean') {
  //   periodLoc = period ? 'One last day' : 'For all period';
  // } else {
  //   periodLoc = `${period} day(s)`;
  // }
  // elementsDOM.period.textContent = periodLoc ;
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
    <input class="status__country">
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

  // TODO: Обновить состояние popup после установки новых значенений
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
