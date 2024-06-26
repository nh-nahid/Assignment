// A Function of Array's Total Element Number Summation

const numb = [34,57,77,43,89,23];

function summation (numb) {

    let sum = 0
 for(i=0; i<numb.length; i++){
    sum = sum + numb[i];
 }
 return sum;

}

 console.log(summation(numb));

    