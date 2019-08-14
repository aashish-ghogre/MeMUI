import moment from "moment";

const parseDateTime = dateTimeZone => {
  var localDateTime = moment
    .utc(dateTimeZone)
    .local()
    .format("YYYY-MM-DD HH:mm:ss");
  var date = localDateTime.substring(0, 10);
  var time = localDateTime.substring(11, 20);
  var dateTime = { date, time };
  return dateTime;
};

export default parseDateTime;
