import { countPer100k } from '../modules/mainApp/countPer100k';

test('CountPer100k should return number of cases per 100k population', () => {
 expect(countPer100k(30, 53378)).toBe(56.2);
 expect(countPer100k(2878382, 145964438)).toBe(1972);
 expect(countPer100k(7511, 13102974)).toBe(57.3);
});
