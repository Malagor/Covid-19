export const filterInputInPopup = (input, childSelector) => {
  console.log('filter');
  const filter = input.value.toUpperCase();
  console.log(filter);
  const listOfCountries = document.querySelectorAll(childSelector);
  console.log (listOfCountries) ;
  for ( let i = 0; i < listOfCountries.length; i += 1) {
    if (listOfCountries[i].innerText.toUpperCase().indexOf(filter) === 0) {
      listOfCountries[i].style.display = '';
    } else {
      listOfCountries[i].style.display = 'none';
    }
  }
}

// export const filterInputInPopup = (input) => {
//   const filter = input.value.toUpperCase();
//   const listOfCountries = document.querySelectorAll('.setting-list-item'); 
//   for ( let i = 0; i < listOfCountries.length; i += 1) {
//     if (listOfCountries[i].innerText.toUpperCase().indexOf(filter) === 0) {
//       listOfCountries[i].style.display = '';
//     } else {
//       listOfCountries[i].style.display = 'none';
//     }
//   }
// }