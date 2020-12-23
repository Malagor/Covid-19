import { localStorageCountryList } from '../mainApp/localStorageCountryList';

export const createListOfCountries = (parentSelector, childClass) => {
  const listOfCountries = document.querySelector(parentSelector);
  const list = localStorageCountryList(null, 'load').map((elem) => elem.country);
  list.forEach((item) => {
    const li = document.createElement('li');
    li.classList.add(childClass);
    li.innerText = item;
    listOfCountries.append(li);
  })
  const li = document.createElement('li');
  li.className = childClass;
  li.innerText = 'All World';
  listOfCountries.prepend(li);

  return listOfCountries;
}

