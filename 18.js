// Write a function that takes a string and returns the most frequent character in
// the string.

function getMostFrequentNumber(str){
    const arr = [];
    for(let i = 0; i < str.length; i++){
        let isCharacterFound = false;
        for(let j = 0; j < arr.length; j++){
            if(arr[j][0] === str[i]){
                isCharacterFound = true;
                arr[j][1]++;
            }
        }
        if(!isCharacterFound){
            arr.push([str[i], 1])
        }
    }
    let maxNum = 0;
    let mostFrequentCharacter = '';
    for(let i = 0; i < arr.length; i++){
        if(maxNum < arr[i][1]){
            maxNum = arr[i][1]
            mostFrequentCharacter = arr[i][0]
        }
    }
    mostFrequentCharacter = "'" + mostFrequentCharacter + "'"
    return mostFrequentCharacter;
}

console.log(getMostFrequentNumber(`Aquickbrownfoxjumpoverthelazydog`))