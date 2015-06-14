var bookArray = [['Theodore Sturgeon', 'Aliens'], ['Michael Cobley', 'Seeds of Earth'], ['James A Corey', 'Leviathan Awakes']];
var bookMap = new Map(bookArray);

/* will return the key/value pairs with the author first, 
a colon, and the title of the book */
bookMap.forEach(function(value, key) {
  console.log(key + ": " + value)
})