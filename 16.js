// Write a function that takes two arrays of numbers and returns a new array
// containing only the numbers that are present in both arrays.

function getCommonNum(arr1, arr2){
    let commonNum = [];

for(let i = 0; i < arr1.length; i++){
    for(let j = 0; j < arr2.length; j++){
        if(arr1[i] === arr2[j]){
            commonNum.push(arr1[i]);
            break;
        }
    }
}
   return commonNum;
}

console.log(getCommonNum([3,6,7,2,9], [5,8,9,4,3]))