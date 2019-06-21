
let maxArea = function(height) {
	let area = 0;
  	for (let i = 0; i < height.length; i++) {
  		for (let j = i; j < height.length; j++ ) {
  			if(j > i) {
  				let min = Math.min(height[j], height[i]);
  				let width = j - i;
  				let newArea = min * width;
  				if(newArea > area) {
  					area = newArea;
  				}
  			} 
  		}
  	}
  	return area;
};

let arr = [1,8,6,2,5,4,8,3,7];
let area = maxArea(arr);
console.log(area);