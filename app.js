const moment = require('moment-timezone');

const randomTimeZone = () => {
  let timezones = moment.tz.names();
  let idx = Math.floor(Math.random() * timezones.length);
  return timezones[idx];
}

const randomDate = () => {
  let date = moment(new Date());
  let timeZone = randomTimeZone();
  let dateWithTZ = date.tz(timeZone);
  let dateObject = {
    date: dateWithTZ.format(),
    timezone: timeZone
  }

  return dateObject;
}