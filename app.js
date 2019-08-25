const moment = require('moment-timezone');

const randomTimeZone = () => {
  let timezones = moment.tz.names();
  let idx = Math.floor(Math.random() * timezones.length);
  return timezones[idx];
}

const randomDate = () => {
  let time = moment(new Date());
  let timeZone = randomTimeZone();
  let date = time.tz(timeZone);
  let dateObject = {
    date: date.format(),
    timezone: timeZone
  }

  return dateObject;
}