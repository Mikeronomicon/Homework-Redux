/* Write a function, setReminder(date, callback) that will execute the callback at the given time. */

function setReminder(date, setTimeout) {
  date = new Date();
  console.log('This is a reminder for ' + date);
}

setTimeout(setReminder, 5000);

//implementation is not perfect, need to keep working on this one.