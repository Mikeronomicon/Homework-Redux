
for (var bottles = 99; bottles >= 0; bottles --) {
  console.log(bottles + "Bottles of beer on the wall," 
    + bottles + " bottles of beer, take one down, pass it around, " 
    + (bottles - 1) + "bottles of beer on the wall!");
  bottles = bottles - 1;
} 
console.log("1 bottle of beer on the wall, 1 bottle of beer, take one down, pass it around, no more bottles of beer on the wall!");
