// A Function That Takes An Array of Numbers and Returns A New Array With Only The Even Numbers

const numb = [55,33,32,76,53,68];

function evenNums (numb) {

    const newArr = [];
for(i=0; i<=numb.length; i++){
    if(numb[i] % 2 === 0){
      newArr.push(numb[i]);
    }
} 
 return newArr;

}

console.log(evenNums(numb));