// Write a function that takes a number and returns true if the number is a
// palindrome (reads the same forwards and backwards) and false otherwise.

function isPalindromeNum(num){
const strOfNum = num + ``;
let reversedNum = ``;

for(let i = strOfNum.length -1; i >= 0; i--){
    reversedNum += strOfNum[i];
}
   return (strOfNum === reversedNum)
}

console.log(isPalindromeNum(121))