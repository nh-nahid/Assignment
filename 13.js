// Write a function that takes an array of numbers and returns the sum of all the
// positive numbers in the array.

function sumPositveNumbers (arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            sum += arr[i]
        }
    }
    return sum
}

const result = sumPositveNumbers([3,6,2,-2,-7])
console.log(result)