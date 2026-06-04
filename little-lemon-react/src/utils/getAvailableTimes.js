import reservationTimes from '../data/reservationTimes';

function getAvailableTimes(date) {
  if (!date) {
    return [];
  }

  const selectedDate = new Date(`${date}T12:00:00`);
  const dayOfMonth = selectedDate.getDate();
  const dayOfWeek = selectedDate.getDay();

  const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
  const filteringInterval = isWeekend ? 2 : 3;

  return reservationTimes.filter((time, index) => {
    return (index + dayOfMonth) % filteringInterval !== 0;
  });
}

export default getAvailableTimes;