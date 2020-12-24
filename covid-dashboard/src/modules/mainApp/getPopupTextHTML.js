import { properties } from '../Properties/Properties';
import { reduceEntryCases } from '../map/reduceEntryCases';
import { getGradeIndex } from '../map/getGradient';

export const getPopupTextHTML = (feature) => {
  const { type, population} = properties;
  const { properties: props = {} } = feature;
  let titleString;

  const {
    country,
    cases,
    deaths,
    recovered,
    flag,
  } = props;

  switch (type) {
    case 'cases':
      titleString = cases;
      break;
    case 'deaths':
      titleString = deaths;
      break;
    case 'recovered':
      titleString = recovered;
      break;
    default:
  }

  const gradeIndex = getGradeIndex(titleString, type, population);
  titleString = reduceEntryCases(titleString);


  return `
       <div class="icon-marker ${type} grade${gradeIndex}">
           <div class="icon-marker-tooltip">
           <div class="marker-tooltips__title">
             <div class="marker-tooltips__flag"><img src="${flag}" alt=""></div>
             <div class="marker-tooltips__country">${country}</div>
           </div>
           
           <ul class="marker-tooltips__list">
             <li class="marker-tooltips__item ${type === 'cases' ? 'cases' : ''}"><span class="marker-tooltips__label">Cases:</span> ${cases}</li>
             <li class="marker-tooltips__item ${type === 'recovered' ? 'recovered' : ''}"><span class="marker-tooltips__label">Recovered:</span> ${recovered}</li>
             <li class="marker-tooltips__item ${type === 'deaths' ? 'deaths' : ''}"><span class="marker-tooltips__label">Deaths:</span> ${deaths}</li>
           </ul>
         </div>
         ${titleString}
       </div>
      `;
};

