// Write a function that takes a 2D array (array of arrays) of numbers and returns
// the sum of all the numbers.

function getSumOf2DArray(arrayOfNum){
    let sum = 0;
for(let i = 0; i < arrayOfNum.length; i++){
    for(let j = 0; j < arrayOfNum[i].length; j++){
        sum += arrayOfNum[i][j]
    }
}
   return sum;
}

console.log(getSumOf2DArray([[2,4,6], [3,7,3,9], [1,3,2]]))