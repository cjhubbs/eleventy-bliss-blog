const moduleName = require('../helpers/moduleName');
const { DateTime } = require('luxon');

const body = (dateObj) => {
  return DateTime.fromJSDate(dateObj, { zone: 'America/Chicago' }).toFormat('d LLL');
};

module.exports = {
  name: moduleName(__filename),
  body,
};
