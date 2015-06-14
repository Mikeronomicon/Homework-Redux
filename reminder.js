/* Write a function, setReminder(date, callback) that will execute the callback at the given time. */

function setReminder(date, setTimeout) {
  date = new Date();
  if (date === new Date(2015, 6, 15)) {
    console.log('This is a reminder for ' + date);
  } else {
    console.log('You have nothing else until:' + new Date(2015, 6, 15, 9));
  }
}

//setTimeout(setReminder, 5000);
setTimeout(setReminder, Date());

