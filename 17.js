// Write a function that takes a number and returns an array of all its divisors.

function getDivisors(num){
    const divisors = [];
    for(let i = 1; i <= num/2; i++){
        if(num % i === 0 ){
            divisors.push(i)
        }
    }
     divisors.push(num)
     return divisors;
}

console.log(getDivisors(20))