let nums = [1, 1, 2, 3, 4, 4, 4]

var removeDuplicates = function(nums) {
    let count = 1; // muestra cantidad de numeros unicos *

    for (let i = 1; i < nums.length; i++) {

        if (nums[i] !== nums[count - 1]) {
           nums[count] = nums[i]
           count ++ // * a partir de incrementar si entra a este if
        }
    }
    return count;
};

removeDuplicates(nums);