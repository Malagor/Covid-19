import L from 'leaflet/dist/leaflet';
import { properties } from '../Properties/Properties';
import { getGradesList } from './getGradient';
import { reduceEntryCases } from './reduceEntryCases';

export const getLegend = () => {
  const {type , population} = properties;
  const legend = L.control({ position: 'bottomleft' });

  const gradeArr = getGradesList(type, population);

  const localType = type.charAt(0).toUpperCase() + type.slice(1);
  legend.onAdd = () => {
    const block = L.DomUtil.create('div', 'info legend');
    block.innerHTML +=
      '<h3>Legend</h3>' +
      `<h4>${localType}</h4>`;
      gradeArr.forEach((el, idx) => {
        const label = (gradeArr[idx + 1]) ? `${reduceEntryCases(gradeArr[idx])} - ${reduceEntryCases(gradeArr[idx + 1])}` : `> ${reduceEntryCases(gradeArr[idx])}`;
        block.innerHTML += `
        <div class="legend__item">
          <div class="icon-marker ${type} grade${idx + 1}">${reduceEntryCases(gradeArr[idx] + 10)}</div><div>${label}</div>
        </div>
        `
      });
      return block;
  };
  return legend;
};
