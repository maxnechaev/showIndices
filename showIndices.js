var str = String(process.argv.slice(2));
var myObject = {};

function showIndices() {
  for (var j = 0; j < str.length; j++) {
    if (str[j] == " " || str[j] === ",") {
      //check for empty spaces and commas
    } else {
      var indices = [];
      myObject[str[j]] = indices;
      var letterToIndex = str[j];
      for (var i = 0; i < str.length; i++) {
        if (str[i] == letterToIndex)
          indices.push(i);
      }
    }
  }
  return myObject;
}

console.log(showIndices(str));

// The function should return all the indices (zero-based positions) in the string
// where each character is found. So for each letter, we are returning
// (potentially) multiple numbers to represent all the places in the string that it shows up.
//
// hello will result in
// {
// h: [0],
// e: [1],
// l: [2, 3],
// o: [4]
// }
