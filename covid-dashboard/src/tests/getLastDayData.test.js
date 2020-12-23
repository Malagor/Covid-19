import { getLastDayData } from '../modules/mainApp/getLastDayData';

const timeData = {
  'cases': [
    [
      '12/21/20',
      50013,
    ],
    [
      '12/22/20',
      50190,
    ],
  ],
    'deaths': [
    [
      '12/21/20',
      2082,
    ],
    [
      '12/22/20',
      2096,
    ],
  ],
    'recovered': [
    [
      '12/21/20',
      39508,
    ],
    [
      '12/22/20',
      39585,
    ],
  ],
};

const timeData2 = {
  'cases': [
    [
      '12/21/20',
      53425,
    ],
    [
      '12/22/20',
      53814,
    ],
  ],
    'deaths': [
    [
      '12/21/20',
      1098,
    ],
    [
      '12/22/20',
      1111,
    ],
  ],
    'recovered': [
    [
      '12/21/20',
      28752,
    ],
    [
      '12/22/20',
      29249,
    ],
  ],
};

const timeData3 =  {
  'cases': [
    [
      '12/21/20',
      7602,
    ],
    [
      '12/22/20',
      7633,
    ],
  ],
    'deaths': [
    [
      '12/21/20',
      81,
    ],
    [
      '12/22/20',
      82,
    ],
  ],
    'recovered': [
    [
      '12/21/20',
      7028,
    ],
    [
      '12/22/20',
      7073,
    ],
  ],
};


test('GetLastDayData array1', () => {
  expect(getLastDayData(timeData.cases)).toBe(177);
  expect(getLastDayData(timeData.deaths)).toBe(14);
  expect(getLastDayData(timeData.recovered)).toBe(77);
});

test('GetLastDayData array2', () => {
  expect(getLastDayData(timeData2.cases)).toBe(389);
  expect(getLastDayData(timeData2.deaths)).toBe(13);
  expect(getLastDayData(timeData2.recovered)).toBe(497);
});

test('GetLastDayData array3', () => {
  expect(getLastDayData(timeData3.cases)).toBe(31);
  expect(getLastDayData(timeData3.deaths)).toBe(1);
  expect(getLastDayData(timeData3.recovered)).toBe(45);
});
