import { grades, getGradesList } from '../modules/map/getGradient';


test('getGradesList should return an array of boundary values', () => {

  expect(getGradesList('cases', true)).toEqual([0, 100, 1000, 10000, 100000, 500000]);
  expect(getGradesList('cases', false)).toEqual([0, 100, 1000, 10000, 100000, 1000000]);

  expect(getGradesList('deaths', true)).toEqual( [0, 10, 30, 50, 70, 100]);
  expect(getGradesList('deaths', false)).toEqual([0, 500, 1000, 5000, 10000, 100000]);

  expect(getGradesList('recovered', true)).toEqual([0, 100, 1000, 10000, 100000, 500000]);
  expect(getGradesList('recovered', false)).toEqual([0, 100, 1000, 10000, 100000, 1000000]);
});
