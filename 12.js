// Write a function that takes an array of numbers and a target number. The
// function should return true if the target number is in the array and false
// otherwise.

function hasTargetNumber (arr, target){
    for(let i = 0; i < arr.length; i++){
       if(arr[i] === target){
        return true;
       }
    }
    return false
}

const isAvailable = hasTargetNumber([2,3,6,3,7,12,17,35], 17)
console.log(isAvailable)