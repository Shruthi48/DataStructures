/*
Question: Given a string, Sherlock considers it valid if all the characters in the string occur the same number of time. However, a string is also valid if the frequencies are same after removing any one character.

Example 1:
Input: str = “aabbcd”
Output: NO

Example 2:
Input: str = “abcc”
Output: YES
*/


let str = "abcc";
let strArray = str.split('');
let uniqueKeys = [...new Set(str)];
console.log(strArray)

let items = uniqueKeys.map((item) => strArray.filter(x => x=== item).length);
let sortedItem = items.sort();

if(sortedItem[0] == sortedItem[sortedItem.length -1]) {
   console.log("YES");
}

if(sortedItem[0] == 1 && sortedItem[1] == sortedItem[sortedItem.length -1]) {
    console.log("YES");
}

if (first == second && second == secondLast && secondLast == (last - 1)) return "YES";

// add conditions to possible cases to be valid to be true 