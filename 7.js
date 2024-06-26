// A Function of Getting Largest Number From Array

const array1 = [47,56,78,21,32,84,12,27];

function ultimateLarest (array1) {

    let largestNum = array1[0];

for(i=0; i<array1.length; i++) {

    if(array1[i] > largestNum) {

    largestNum = array1[i];
    
     } 
} return largestNum;

}

console.log(ultimateLarest(array1));
