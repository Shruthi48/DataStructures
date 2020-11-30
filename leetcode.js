let word = "a1-b2-c4---d";

let wordArray = word.split('');
let copyOfWordArray = word.split('');
const letters = /^[A-Za-z]+$/;
let length = wordArray.length;

for(let i =  0 ; i < length ; i++) {
    const item = wordArray.pop();
    if(item.match(letters)) {
        let wordVal = copyOfWordArray[i];
        while(!wordVal.match(letters) ) {
            i++;
            wordVal = copyOfWordArray[i];
        }
        copyOfWordArray[i] = item;
    }
}

console.log(copyOfWordArray);