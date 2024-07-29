// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
 
// Example 1:
// Input: nums = [3,2,3]
// Output: 3

// Example 2:
// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

let nums = [2, 3, 2, 4, 2, 8, 4, 4];

var majorityElement = function(nums) {
    let count = 0 // contador 
    let majorityNum = 0 // asigno numero 


    for (let i = 0; i < nums.length; i++) {

        if (count == 0) {
            majorityNum = nums[i] 
        }

        if (majorityNum == nums[i]) {
            count++ 
        } else {
            count -- 
        }

        console.log(majorityNum);
    }
    return majorityNum;
};

majorityElement(nums);