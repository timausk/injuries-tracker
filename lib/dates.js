const daysDifference = (startDate, endDate) => {
  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  const dateFrom = new Date(startDate);
  const dateTo = new Date(endDate);
  return Math.round(Math.abs((dateFrom - dateTo) / oneDay));
};

const reformatDateStr = (dateStr) => {
  let a = dateStr.split(/\D/);
  return a.reverse().join('-');
};

const dateStrToMs = (dateStr) => {
  let dateFormatted = reformatDateStr(dateStr);
  return new Date(dateFormatted).getTime();
};

module.exports = {
  daysDifference,
  dateStrToMs
};
