export const returnListOfCountries = (countriesElements) => {
  const listOfCountries = document.querySelectorAll('.country-item');  
    listOfCountries.forEach((item) => {item.style.display = ''});
    countriesElements.input.value = '';

}