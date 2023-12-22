import { calculateDaysToDate } from "./helpers";

describe('helpers', () => {
  test('calculateDaysToDate returns the number of days left till a future date', () => {
    const date = new Date();
    date.setDate(date.getDate() + 3);

    expect(calculateDaysToDate(date)).toBe(3);
  });

  test('calculateDaysToDate returns negative of the number of days passed since a given date', () => {
    const date = new Date();
    date.setDate(date.getDate() - 3);

    expect(calculateDaysToDate(date)).toBe(-3);
  });

  test('calculateDaysToDate returns 0 if the current date is passed in', () => {
    const date = new Date();

    expect(calculateDaysToDate(date)).toBe(0);
  });
});
