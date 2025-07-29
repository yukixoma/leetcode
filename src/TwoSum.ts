function twoSum(nums: number[], target: number): number[] {
  for (let firstIndex = 0; firstIndex < nums.length; firstIndex++) {
    let secondIndex = nums.indexOf(target - nums[firstIndex], firstIndex + 1);
    if (secondIndex != -1) {
      return [firstIndex, secondIndex];
    }
  }
}

console.log(twoSum([2, 7, 11, 15], 9));
