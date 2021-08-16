//! Write a recursive function that performs a Binary Search

const recursiveBinarySearch = (array, value, leftPosition, rightPosition) => {  
    if (leftPosition > rightPosition){
        return -1;
    } 

    var middlePivot = Math.floor((leftPosition + rightPosition) / 2);
    if (array[middlePivot] === value) {
        return middlePivot;
    } else if (array[middlePivot] > value) {
        return recursiveBinarySearch(array, value, leftPosition, middlePivot - 1);
    } else {
        return recursiveBinarySearch(array, value, middlePivot + 1, rightPosition);
    }
}

console.log(recursiveBinarySearch([25, 63, 37, 2, 10, 45], 45, 0, 5))
console.log(recursiveBinarySearch([25, 63, 37, 2, 10, 45], 10, 0, 5))