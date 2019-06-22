const letter = {
  2: ["a","b","c"],
  3: ["d","e","f"],
  4: ["g", "h", "i"],
  5: ["j","k","l"],
  6: ["m","n","o"],
  7: ["p","q","r","s"],
  8: ["t","u","v"],
  9: ["w", "x","y","z"]
}
function combinations(digits_arr,arr) {
  var new_arr = [];
  let first = digits_arr.shift();
  let first_arr = letter[first] || [];
  if(arr.length) {
    for(let i = 0; i < arr.length; i++) {
      for(let j = 0; j < first_arr.length; j++) {
        new_arr.push(`${arr[i]}${first_arr[j]}`);
      }
    }
  } else {
    new_arr = first_arr;
  }
  if(digits_arr.length) {
    return combinations(digits_arr, new_arr);
  } else {
    return new_arr;
  }
}
var letterCombinations = function(digits) {
  let digits_arr = digits.split("");
  let first_arr = [];
  let arr = combinations(digits_arr, first_arr);
  return arr;
};

let num = "2";
let result = letterCombinations(num);
console.log(result);