let result_res = [];
let generateParenthesis = function(n) {
  handler(n, n, "");
  return result_res;
};
function handler(left, right, str) {
  if(left == 0) {
    for(let i = 0; i < right; i++) {
      str += ")";
    }
    result_res.push(str);
    return;
  }
  if(left == right) {
    handler(left - 1, right, str + "(");
  } else if(left < right) {
    handler(left - 1, right, str + "(");
    handler(left, right - 1, str + ")");
  }
}
let n = 3;
let res = generateParenthesis(n);
console.log(res);