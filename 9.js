// A Function to Square an Arry

const arr = [6,3,5,8,4];

function squaredArr (arr) {

const sqrArr = [];
for(i=0; i<arr.length; i++){
    sqrArr.push(arr[i]**2)

} 
  return sqrArr;

}

console.log(squaredArr(arr));