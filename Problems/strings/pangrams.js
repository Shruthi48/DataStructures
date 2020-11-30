/*Question: Given a string, identify if it is a pangram.


Input: The quick brown fox jumps over the lazy little dog.
Output: pangram
*/


let str = "The quick brown fox jumps over the lazy little dog.";
let strLowerCase = str.toLowerCase();
let unique = [...new Set(strLowerCase)];
let alphabets = new RegExp(/^[A-Za-z]+$/g);
let result = [];

console.log('unique', unique);
for(let i = 0 ; i< unique.length ; i++) {
   if(unique[i].match(alphabets)) {
       result.push(unique[i])
   }
}

if(result.length === 26) {
    console.log("Yes it is panagram");
}