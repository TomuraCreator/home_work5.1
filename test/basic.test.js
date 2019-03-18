import { sum, collegueNum } from '../src/js/app';

test('should sum', () => {
  const result = sum(collegueNum);
  expect(result).toBe(71700);
});
test('array?', () => {
  const result = collegueNum;
  expect(result).not.toHaveLength(0);
});
