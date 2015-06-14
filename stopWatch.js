/* I'm not happy with this solution, but at least 
it's tracking seconds. */
function watchLogic() {
  time = setInterval(update, 1000)
  update();
}

function update() {
  var date = new Date();
  var seconds = date.getSeconds();
  // for (var seconds = 0; seconds <= 10; seconds++)
  if (seconds < 10) seconds = '0' + seconds
    console.log(seconds);
}

setTimeout(watchLogic, 1000);