
let intToRoman = function(num) {
	let str = "";
	let values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let symbols = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    for(var i = 0; i < values.length; i++) {
    	while(num >= values[i]) {
    		num = num - values[i];
    		str += symbols[i];
    	}
    }
    return str;
};

var str = intToRoman(1994);
console.log(str);

