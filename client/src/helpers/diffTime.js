import moment from 'moment';

export default offer => {
  var a = moment(offer.dateAdded);
  var b = moment(new Date());

  return b.diff(a, 'days');
};
