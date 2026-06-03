import { useState } from 'react';

const initialFormData = {
  date: '',
  time: '',
  guests: '2',
  occasion: 'Casual dining',
  name: '',
  email: '',
};

function getTodayAsLocalDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}

function ReservationSection() {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [confirmation, setConfirmation] = useState('');

  const today = getTodayAsLocalDate();

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));

    setErrors((currentErrors) => ({
      ...currentErrors,
      [name]: '',
    }));

    setConfirmation('');
  }

  function validateForm() {
    const newErrors = {};

    if (!formData.date) {
      newErrors.date = 'Please select a reservation date.';
    } else if (formData.date < today) {
      newErrors.date = 'The reservation date cannot be in the past.';
    }

    if (!formData.time) {
      newErrors.time = 'Please select an available time.';
    }

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!formData.email.includes('@')) {
      newErrors.email = 'Please enter a valid email address.';
    }

    return newErrors;
  }

  function handleSubmit(event) {
    event.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setConfirmation('');
      return;
    }

    setErrors({});
    setConfirmation(
      `Thank you, ${formData.name}. Your table for ${formData.guests} guest${
        formData.guests === '1' ? '' : 's'
      } has been reserved for ${formData.date} at ${formData.time}.`,
    );

    setFormData(initialFormData);
  }

  return (
    <section
      className="page-section reservation-section"
      id="reservations"
      aria-labelledby="reservations-title"
    >
      <div className="reservation-intro">
        <p className="section-label">Plan your visit</p>
        <h2 id="reservations-title">Reserve Your Table</h2>
        <p>
          Select your preferred date, time and party size. This demo form
          validates your details before confirming the reservation.
        </p>
      </div>

      <form className="reservation-form" onSubmit={handleSubmit} noValidate>
        <div className="form-grid">
          <div className="form-field">
            <label htmlFor="reservation-date">Date</label>
            <input
              id="reservation-date"
              name="date"
              type="date"
              min={today}
              value={formData.date}
              onChange={handleChange}
              aria-describedby={errors.date ? 'date-error' : undefined}
              aria-invalid={Boolean(errors.date)}
            />
            {errors.date && (
              <span className="form-error" id="date-error">
                {errors.date}
              </span>
            )}
          </div>

          <div className="form-field">
            <label htmlFor="reservation-time">Time</label>
            <select
              id="reservation-time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              aria-describedby={errors.time ? 'time-error' : undefined}
              aria-invalid={Boolean(errors.time)}
            >
              <option value="">Select a time</option>
              <option value="17:00">17:00</option>
              <option value="18:00">18:00</option>
              <option value="19:00">19:00</option>
              <option value="20:00">20:00</option>
              <option value="21:00">21:00</option>
            </select>
            {errors.time && (
              <span className="form-error" id="time-error">
                {errors.time}
              </span>
            )}
          </div>

          <div className="form-field">
            <label htmlFor="reservation-guests">Number of guests</label>
            <select
              id="reservation-guests"
              name="guests"
              value={formData.guests}
              onChange={handleChange}
            >
              <option value="1">1 guest</option>
              <option value="2">2 guests</option>
              <option value="3">3 guests</option>
              <option value="4">4 guests</option>
              <option value="5">5 guests</option>
              <option value="6">6 guests</option>
            </select>
          </div>

          <div className="form-field">
            <label htmlFor="reservation-occasion">Occasion</label>
            <select
              id="reservation-occasion"
              name="occasion"
              value={formData.occasion}
              onChange={handleChange}
            >
              <option value="Casual dining">Casual dining</option>
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
              <option value="Business meal">Business meal</option>
            </select>
          </div>

          <div className="form-field">
            <label htmlFor="reservation-name">Name</label>
            <input
              id="reservation-name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              aria-describedby={errors.name ? 'name-error' : undefined}
              aria-invalid={Boolean(errors.name)}
            />
            {errors.name && (
              <span className="form-error" id="name-error">
                {errors.name}
              </span>
            )}
          </div>

          <div className="form-field">
            <label htmlFor="reservation-email">Email</label>
            <input
              id="reservation-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="name@example.com"
              value={formData.email}
              onChange={handleChange}
              aria-describedby={errors.email ? 'email-error' : undefined}
              aria-invalid={Boolean(errors.email)}
            />
            {errors.email && (
              <span className="form-error" id="email-error">
                {errors.email}
              </span>
            )}
          </div>
        </div>

        <button className="reservation-submit" type="submit">
          Confirm Reservation
        </button>
      </form>

      {confirmation && (
        <p className="reservation-confirmation" role="status">
          {confirmation}
        </p>
      )}
    </section>
  );
}

export default ReservationSection;