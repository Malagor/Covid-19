import { getGradeIndex } from '../modules/map/getGradient';

let population;

test('getGradeIndex must return an index of a value greater than the passed value depending on the parameter: population - false', () => {
  population = false;

  expect(getGradeIndex(234, 'cases', population)).toBe(2);
  expect(getGradeIndex(10, 'cases', population)).toBe(1);
  expect(getGradeIndex(5425, 'cases', population)).toBe(3);
  expect(getGradeIndex(19526, 'cases', population)).toBe(4);

  expect(getGradeIndex(64456, 'deaths', population)).toBe(5);
  expect(getGradeIndex(11, 'deaths', population)).toBe(1);
  expect(getGradeIndex(6854, 'deaths', population)).toBe(4);
  expect(getGradeIndex(10000000, 'deaths', population)).toBe(6);

  expect(getGradeIndex(5, 'recovered', population)).toBe(1);
  expect(getGradeIndex(30001, 'recovered', population)).toBe(4);
  expect(getGradeIndex(201, 'recovered', population)).toBe(2);
  expect(getGradeIndex(19765753464536, 'recovered', population)).toBe(6);
});


test('getGradeIndex must return an index of a value greater than the passed value depending on the parameter: population - true', () => {
  population = true;

  expect(getGradeIndex(234, 'cases', population)).toBe(2);
  expect(getGradeIndex(64456, 'deaths', population)).toBe(6);
  expect(getGradeIndex(19765753464536, 'recovered', population)).toBe(6);
});
