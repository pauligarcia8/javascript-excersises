// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
// Merge nums1 and nums2 into a single array sorted in non-decreasing order. The final sorted array should not be returned by the function, but instead be stored inside the array nums1. 
// To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

let nums1 = [1,2,3,0,0,0]
let  m = 3
let nums2 = [2,5,6]
let n = 3

var merge = function(nums1, m, nums2, n) {
    // merge array 2 into 1
    let newIndex = 0
    
    for(let i = m; i < m + n; i++) {
        if (nums1[i] == 0) {
            nums1[i] = nums2[newIndex]
            newIndex++
        }
    }

    // bubblesort
    for(let i = 0; i < m + n - 1; i++) {
        for (let j = 0; j < m + n + 1; j++) {
            if (nums1[j] > nums1[j + 1]) {
                let aux;
                aux = nums1[j]
                nums1[j] = nums1[j + 1]
                nums1[j + 1] = aux
            }
        }
    }

    return nums1;
};

console.log(merge(nums1, m, nums2, n))