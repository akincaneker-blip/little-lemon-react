import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import ReservationSection from './ReservationSection';
// @vitest-environment jsdom

describe('ReservationSection', () => {
  it('disables the time selection until a date is selected', () => {
    render(<ReservationSection />);

    const timeSelect = screen.getByLabelText('Time');

    expect(timeSelect).toBeDisabled();
  });
});