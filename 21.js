// Write a function that takes a number n and returns the nth Fibonacci numbers.

function getFibonacciNum (n){
    let grandPrev = 1;
    let prev = 2;

    let current = 0;

    for(let i = 1; i <= n-2; i++){
        current = grandPrev + prev;
        grandPrev = prev;
        prev = current;
    }
    return current
}

console.log(getFibonacciNum(6))