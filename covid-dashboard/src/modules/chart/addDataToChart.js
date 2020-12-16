function addData(el, data, chartProps, title, chart) {
  const colors = [
    'rgba(255, 0, 0, 1)',
    'rgba(255, 174, 0, 1)',
    'rgba(0, 134, 11, 1)',
  ];
  const names = [];
  data.map((it) => names.push(it[0]));
  const index = names.indexOf(el);
  const val = chartProps[el];
  console.log(val, el);
  const datasetsEl = {
    label: title,
    data: Object.values(data[index][1]),
    borderColor: colors[index],
    pointBackgroundColor: colors[index],
    pointRadius: 0.5,
    pointHoverRadius: 5,
    borderWidth: 0.5,
  };
  chart.config.data.datasets.map((it) => console.log(it.label));
  const elVal = [];
  chart.config.data.datasets.map((it, ind) =>
    it.borderColor === colors[index] ? elVal.push(ind) : -1,
  );
  console.log(elVal, chart.config.data.datasets);
  if (val) chart.config.data.datasets.push(datasetsEl);
  if (!val) chart.config.data.datasets.splice(elVal[0], 1);
  chart.update();
}

// eslint-disable-next-line import/prefer-default-export
export { addData };