/**
 * @param {string} s
 * @return {boolean}
 */
let config = {
    "}": "{",
    "]": "[",
    ">": "<",
    ")": "("
}
var isValid = function(s) {
    var stack_arr = [];
    for(let i = 0 ; i < s.length; i++) {
        let letter = s.charAt(i);
        let len = stack_arr.length;
        if(!config[letter] || config[letter] != stack_arr[len - 1]) {
            stack_arr.push(letter);
        } else if(config[letter] == stack_arr[len - 1]) {
            stack_arr.pop();
        }
    }
    return stack_arr.length ? false : true;
};

let str = "()<>{}[]}";
let s = isValid(str);
console.log(s);