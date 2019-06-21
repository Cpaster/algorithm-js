function convert(str, num) {
	let len = str.length;
	let arr = [];
	let doubleArr = [];
	let row = 0;
	let t = 2*num -2;
	for(let i = 0; i < len; i++) {
		let index = i + 1;
		if( index % t > num || index%t == 0 ) {
			for(let l = 0; l < num - 2; l++) {
				arr.push(" ");
			}
			arr.push(str[i]);
			if(index%t == 0) {
				for(let l = 0; l < num - 2; l++) {
					arr.push(" ");
				}
			}
		} else {
			arr.push(str[i]);
		}
	}
	for(let index = 0; index < arr.length; index++) {
		let cc = index;
		if(arr[index]) {
			let row = Math.floor(cc / num);
			let line = cc % num;
			// console.log(`index:${cc},text: ${arr[index]};line:${line},row:${row}`);
			if(doubleArr[line]) {
				doubleArr[line][row] = arr[index];
			} else {
				doubleArr[line] = [];
				doubleArr[line][row] = arr[index];
			}
		}
	}
	var str = "";
	for(var h = 0; h < doubleArr.length; h++) {
		str += (doubleArr[h].join("") + "\n");
	}
	return str;
}

let str = "asdfzsdgfasfdgsdfgsdfvxcjkvbhpiaeufgnhbjkmfsnkiajsdfhvkzj;fnvlasji;kdfgnskjldfghlsdjkfghsdfgsfgxfbvsdfgsdgfsdfgsdfgsdfg"
let num = 10;
let d = convert(str, num);
console.log(d);