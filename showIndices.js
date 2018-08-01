var str = String(process.argv.slice(2));
var myObject = {};

function countLetters(str) {
  for (var i = 0; i < str.length; i++) {
    if (str[i] == " " || str[i] === ",") {
      //check for empty spaces and commas
    } else if (myObject[str[i]] == undefined) {
      myObject[str[i]] = 1;
    } else {
      myObject[str[i]] += 1;
    }
  }
  return myObject;
}

console.log(countLetters(str));
