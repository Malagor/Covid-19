import { createTableHTML, getTableDOMEelements } from './tableHTML';
import { getControlsBlockHTML } from '../controls/controlsBlock';

let tableElements = null;

const createTable = (el) => {

  createTableHTML(el);
  tableElements = getTableDOMEelements(el);
  getControlsBlockHTML(tableElements.tableControl, el);

};

const renderTable = (currentCountry)=> {
  tableElements.country.innerText = currentCountry.country;
  tableElements.numbOfCases.innerText = currentCountry.cases;
  tableElements.numbOfRecovered.innerText = currentCountry.recovered;
  tableElements.numbOfDeaths.innerText = currentCountry.deaths;
};

export {
  createTable,
  renderTable
}
