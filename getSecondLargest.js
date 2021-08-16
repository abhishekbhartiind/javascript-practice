/**
 * Complete the getSecondLargest function in the editor below. 
 * It has one parameter: an array, nums, of n numbers. 
 * The function must find and return the second largest number in nums.
 */

const getSecondLargest = arrayOfNums => {
    let largest = arrayOfNums[0];
    let secondLargest = arrayOfNums[1] < largest 
    ? arrayOfNums[1] 
    : largest;

    for(let i of arrayOfNums) {
        if(i > secondLargest){
            secondLargest = largest
            largest = i
        }

        if(i > secondLargest && i < largest) {
            secondLargest = i
        }
    }
    return secondLargest;
}

console.log(getSecondLargest([2, 3, 4, 4, 5, 6, 7, 8, 9]))