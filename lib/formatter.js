const {daysDifference, dateStrToMs} = require('./dates');

/**
 * @param {object} entry
 * @returns {object}
 */
const injuredFormatter = (entry) => {
  entry['injuryDateMs'] = dateStrToMs(entry.injuryDate);
  return entry;
};

/**
 * @param {object} entry
 * @returns {object}
 */
const recoveredFormatter = (entry) => {
  let injuryDateMs = dateStrToMs(entry.injuryDate);
  let returnDateMs = dateStrToMs(entry.returnDate);
  entry['total'] = daysDifference(injuryDateMs, returnDateMs);
  return entry;
};

/**
 * @param {object} data
 * @param {object} data.injuries
 * @param {string} data.injuries.injuryDate
 * @param {string} data.injuries.returnDate
 */
module.exports.formatter = (data) => {
  return data.injuries.map(function (entry) {
    return !entry.returnDate ? injuredFormatter(entry) : recoveredFormatter(entry);
  });
};
