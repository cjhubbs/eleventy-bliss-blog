const { DateTime } = require('luxon');

module.exports = (dateObj, format) => {
  return DateTime.fromJSDate(dateObj, { zone: 'America/Chicago' }).toFormat(format);
};
