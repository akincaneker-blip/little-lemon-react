import { describe, expect, it } from 'vitest';
import reservationTimes from '../data/reservationTimes';
import getAvailableTimes from './getAvailableTimes';

describe('getAvailableTimes', () => {
  it('returns an empty array when no date is provided', () => {
    expect(getAvailableTimes('')).toEqual([]);
  });

  it('returns only times that exist in the original reservation list', () => {
    const availableTimes = getAvailableTimes('2026-06-08');

    availableTimes.forEach((time) => {
      expect(reservationTimes).toContain(time);
    });
  });

  it('filters out some reservation times after a date is selected', () => {
    const availableTimes = getAvailableTimes('2026-06-08');

    expect(availableTimes.length).toBeGreaterThan(0);
    expect(availableTimes.length).toBeLessThan(reservationTimes.length);
  });

  it('returns different availability for different dates', () => {
    const firstDateTimes = getAvailableTimes('2026-06-08');
    const secondDateTimes = getAvailableTimes('2026-06-09');

    expect(firstDateTimes).not.toEqual(secondDateTimes);
  });

  it('returns fewer available times on weekends than on weekdays', () => {
    const weekendTimes = getAvailableTimes('2026-06-06');
    const weekdayTimes = getAvailableTimes('2026-07-06');

    expect(weekendTimes.length).toBeLessThan(weekdayTimes.length);
  });
});