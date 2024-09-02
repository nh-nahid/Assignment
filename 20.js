// Write a function that takes a number and returns true if it is an Armstrong
// number and false otherwise.

function swapNum(arr){
    
    const temp = arr[0];

    arr[0] = arr[1];
    arr[1] = temp;
    return arr;
}
console.log(swapNum([44,33]))