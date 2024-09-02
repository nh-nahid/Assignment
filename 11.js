// Write a function that takes a string and counts the number of vowels (A, E, I, O, U, a, e, i, o, u) in the string.

function countVowels(str){
    let count = 0;

    for(let i = 0; i< str.length; i++){
        if(str[i] === `A` || str[i] === `E` || str[i] === `I` || str[i] === `O` || str[i] === `U` || str[i] === `a` || str[i] === `e` || str[i] === `i` || str[i] === `o` || str[i] === `u`){

            count++;
        }
    }
    return count;
}

const numberOfVowel = countVowels(`A quick brown fox jumps over the lazy dog`)
console.log(numberOfVowel)