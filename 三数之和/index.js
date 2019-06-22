function compare(value1,value2){
  if (value1 < value2){
    return -1;
  }else if (value1 > value2){
    return 1;
  }else{
    return 0;
  }
}
let threeSum = function(nums) {
  nums = nums.sort(compare);
  let len = nums.length;
  let result = [];
  for(let i = 0; i < len; i++) {
    if(i == 0 || i > 0 && nums[i] != nums[i-1]) {
      let left = i + 1;
      let right = len - 1;
      while(left < right) {
        let r = nums[i] + nums[left] + nums[right];
        if (r == 0) {
          result.push([nums[i], nums[left], nums[right]]);
          while(left < right && nums[left] == nums[left + 1]) left++;
          while(left < right && nums[right] == nums[right - 1]) right--;
          left++;
          right--;
        } else if(r > 0) {
          while(left < right && nums[right] == nums[right - 1]) right--;
          right--;
        } else {
          while(left < right && nums[left] == nums[left + 1]) left++;
          left++;
        }
      }
    }
  }
  return result;
};

let nums = [-1, 0, 1, 2, -1, -4];
let arr = threeSum(nums); 
console.log(arr);