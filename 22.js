// Write a function that takes a string and returns a new string with all the duplicate characters removed.


// sting to array
function stringToArray(str){
    const arr = [];
    for(let i  = 0; i < str.length; i++){
        arr.push(str[i]);
    }
    return arr;
}

// remove duplicate from array 
function removeDuplicateFromArray(arr){
    for(let i = 0; i<= arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] !== '' && arr[i] === arr[j]){
                arr[j] = ''
            }
        }
    }
    return arr;
}

// array to string
function arrayToString(arr){
    let newStr = '';
    for(let i =  0; i < arr.length; i++){
        newStr += arr[i];
    }
    return newStr;
}

function removeDuplicateFromString (str){
    const arr = stringToArray(str);
    const newArr = removeDuplicateFromArray(arr)
    const newStr = arrayToString(newArr);
    return newStr;
}

console.log(removeDuplicateFromString(`hello world`))