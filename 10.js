// A Function That Prints All The Prime Numbers Between 1 and 50

function primeNum (numb) {

   if (numb === 1) {
    return false;
   }

    let isPrime = true;

   for ( i = 2; i < numb; ++i) {

     if( numb % i === 0 ) {
       isPrime = false;
       break;
     }
  }
    return (isPrime)
}

 function allPrimeNum (start, end) {
    const primeArray = [];

    for( i=start; i<=end; ++i) {

       if (primeNum(i)) {
        primeArray.push(i);
    } 
 }    
    return primeArray;
   }

   console.log(allPrimeNum(1, 50));
