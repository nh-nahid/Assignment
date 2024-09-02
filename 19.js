// Write a function that takes a number and returns true if it is an Armstrong
// number and false otherwise.

function isArmstrong(num){
    num = num + ''
    let sum = 0;
    for(let i = 0; i < num.length; i++){
        sum += num[i] ** 3
    }
    return num === sum + '';
}

console.log(isArmstrong(153))