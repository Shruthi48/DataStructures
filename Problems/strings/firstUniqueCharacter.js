/*
You are given a string with some repeating characters and some unique characters. Find the first unique character and return its index.

Example 1:
Input: studyAlgorithms
Output: 2

Example 2:
Input: iLoveToCode
Output: 0
*/


function findIndexOfFirstUniqueCharacter(str1) {
    let strArray = str1.split('');
    let alphabetObj = {};

    for(let item of strArray) {
        if(alphabetObj[item]) {
            alphabetObj[item] +=1;
        } else {
            alphabetObj[item] = 1;
        }
    }


    let resultArray = Object.values(alphabetObj);
    return resultArray.findIndex(item => item == 1);
}

console.log(findIndexOfFirstUniqueCharacter("studyAlgorithms"))
console.log(findIndexOfFirstUniqueCharacter("iLoveToCode"))

/*
Time Complexity: O(n)O(n)
Space Complexity: O(1)O(1)
*/