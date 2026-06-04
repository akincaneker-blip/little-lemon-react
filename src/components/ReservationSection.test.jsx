// @vitest-environment jsdom

import { describe, expect, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import ReservationSection from './ReservationSection';

function getFutureDate(daysAhead = 7) {
  const date = new Date();
  date.setDate(date.getDate() + daysAhead);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}

function selectFutureDateAndFirstAvailableTime() {
  const dateInput = screen.getByLabelText('Date');
  const timeSelect = screen.getByLabelText('Time');

  fireEvent.change(dateInput, {
    target: { value: getFutureDate() },
  });

  const firstAvailableTime = timeSelect.options[1].value;

  fireEvent.change(timeSelect, {
    target: { value: firstAvailableTime },
  });

  return {
    dateInput,
    timeSelect,
    firstAvailableTime,
  };
}

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
      target: { value: getFutureDate() },
    });

    expect(timeSelect).toBeEnabled();
  });

  it('shows available reservation times after a date is selected', () => {
    render(<ReservationSection />);

    const dateInput = screen.getByLabelText('Date');
    const timeSelect = screen.getByLabelText('Time');

    fireEvent.change(dateInput, {
      target: { value: getFutureDate() },
    });

    expect(timeSelect.options.length).toBeGreaterThan(1);
  });

  it('clears the selected time when the date changes', () => {
    render(<ReservationSection />);

    const { dateInput, timeSelect, firstAvailableTime } =
      selectFutureDateAndFirstAvailableTime();

    expect(timeSelect).toHaveValue(firstAvailableTime);

    fireEvent.change(dateInput, {
      target: { value: getFutureDate(8) },
    });

    expect(timeSelect).toHaveValue('');
  });

  it('shows validation errors when the form is submitted empty', () => {
    render(<ReservationSection />);

    fireEvent.click(
      screen.getByRole('button', { name: 'Confirm Reservation' }),
    );

    expect(
      screen.getByText('Please select a reservation date.'),
    ).toBeInTheDocument();

    expect(
      screen.getByText('Please select an available time.'),
    ).toBeInTheDocument();

    expect(screen.getByText('Please enter your name.')).toBeInTheDocument();

    expect(
      screen.getByText('Please enter your email address.'),
    ).toBeInTheDocument();
  });

  it('shows an error when the email address is invalid', () => {
    render(<ReservationSection />);

    selectFutureDateAndFirstAvailableTime();

    fireEvent.change(screen.getByLabelText('Name'), {
      target: { value: 'Akın' },
    });

    fireEvent.change(screen.getByLabelText('Email'), {
      target: { value: 'invalid-email' },
    });

    fireEvent.click(
      screen.getByRole('button', { name: 'Confirm Reservation' }),
    );

    expect(
      screen.getByText('Please enter a valid email address.'),
    ).toBeInTheDocument();
  });

  it('shows a confirmation message after a valid reservation', () => {
    render(<ReservationSection />);

    const reservationDate = getFutureDate();

    const dateInput = screen.getByLabelText('Date');
    const timeSelect = screen.getByLabelText('Time');

    fireEvent.change(dateInput, {
      target: { value: reservationDate },
    });

    const firstAvailableTime = timeSelect.options[1].value;

    fireEvent.change(timeSelect, {
      target: { value: firstAvailableTime },
    });

    fireEvent.change(screen.getByLabelText('Number of guests'), {
      target: { value: '3' },
    });

    fireEvent.change(screen.getByLabelText('Name'), {
      target: { value: 'Akın' },
    });

    fireEvent.change(screen.getByLabelText('Email'), {
      target: { value: 'akin@example.com' },
    });

    fireEvent.click(
      screen.getByRole('button', { name: 'Confirm Reservation' }),
    );

    expect(screen.getByRole('status')).toHaveTextContent(
      `Thank you, Akın. Your table for 3 guests has been reserved for ${reservationDate} at ${firstAvailableTime}.`,
    );
  });

  it('resets the form after a valid reservation', () => {
    render(<ReservationSection />);

    selectFutureDateAndFirstAvailableTime();

    fireEvent.change(screen.getByLabelText('Name'), {
      target: { value: 'Akın' },
    });

    fireEvent.change(screen.getByLabelText('Email'), {
      target: { value: 'akin@example.com' },
    });

    fireEvent.click(
      screen.getByRole('button', { name: 'Confirm Reservation' }),
    );

    expect(screen.getByLabelText('Date')).toHaveValue('');
    expect(screen.getByLabelText('Time')).toHaveValue('');
    expect(screen.getByLabelText('Time')).toBeDisabled();
    expect(screen.getByLabelText('Name')).toHaveValue('');
    expect(screen.getByLabelText('Email')).toHaveValue('');
  });
});