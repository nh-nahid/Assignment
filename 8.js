const numbers = [2,3,21,45,56,33];

function getLargestNumber(value){
    let secondLargestNum = 0
    let largestNumber = value[0];

    for(let i = 0; i < numbers.length; i++)
        if(value[i] > largestNumber){
            secondLargestNum = largestNumber
           largestNumber = value[i]
        }
        
        return secondLargestNum
}
console.log(getLargestNumber(numbers))
