var moment = require('moment');

console.log(moment().format());

//january 1
var now = moment();

console.log('Current timestamp', now.unix());

var timestamp = 1530841361;

var currentMoment = moment.unix(timestamp);
console.log('Current moment', currentMoment.format('MMM D, YY @ h:mm a'));

console.log('Current moment', currentMoment.format('MMMM Do, YYYY @ h:mm a'));
