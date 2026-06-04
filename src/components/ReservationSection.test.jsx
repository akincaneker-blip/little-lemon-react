// @vitest-environment jsdom

import { describe, expect, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import ReservationSection from './ReservationSection';

describe('ReservationSection', () => {
  it('disables the time selection until a date is selected', () => {
    render(<ReservationSection />);

    const timeSelect = screen.getByLabelText('Time');

    expect(timeSelect).toBeDisabled();
  });

  it('enables the time selection after a date is selected', () => {
    render(<ReservationSection />);

    const dateInput = screen.getByLabelText('Date');
    const timeSelect = screen.getByLabelText('Time');

    fireEvent.change(dateInput, {
      target: { value: '2026-06-08' },
    });

    expect(timeSelect).toBeEnabled();
  });

  it('shows available reservation times after a date is selected', () => {
    render(<ReservationSection />);

    const dateInput = screen.getByLabelText('Date');
    const timeSelect = screen.getByLabelText('Time');

    fireEvent.change(dateInput, {
      target: { value: '2026-06-08' },
    });

    expect(timeSelect.options.length).toBeGreaterThan(1);
  });

  it('clears the selected time when the date changes', () => {
    render(<ReservationSection />);

    const dateInput = screen.getByLabelText('Date');
    const timeSelect = screen.getByLabelText('Time');

    fireEvent.change(dateInput, {
      target: { value: '2026-06-08' },
    });

    const firstAvailableTime = timeSelect.options[1].value;

    fireEvent.change(timeSelect, {
      target: { value: firstAvailableTime },
    });

    expect(timeSelect).toHaveValue(firstAvailableTime);

    fireEvent.change(dateInput, {
      target: { value: '2026-06-09' },
    });

    expect(timeSelect).toHaveValue('');
  });
});