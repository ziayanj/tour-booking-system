function calculateDaysToDate(date) {
  const givenDate = new Date(date);

  const timeRemaining = givenDate - new Date();
  const daysRemaining = Math.ceil(timeRemaining / (1000 * 3600 * 24));

  return daysRemaining;
}

export {
  calculateDaysToDate,
};
