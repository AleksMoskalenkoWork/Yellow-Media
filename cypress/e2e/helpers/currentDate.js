const currentDate = () => {
  const date = new Date();
  const currentDate = {
    day: date.toLocaleDateString('uk-UA', { day: '2-digit' }),
    month: date.toLocaleDateString('uk-UA', { month: 'long' }),
    year: date.toLocaleDateString('uk-UA', { year: 'numeric' }),
  };
  return currentDate;
};
module.exports = currentDate;
