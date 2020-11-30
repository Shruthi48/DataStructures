/*
Given two strings str1 and str2. Write a function to determine if str1 is an anagram of str2.

Example 1:
str1 = “listen”, str2 = “silent”
Output = True

Example 2:
str1 = “mississippi”, str2 = “mips”
Output = False
*/

function findAnagarm(str1, str2) {
   let countObj = {}

   let string1Array = str1.split('');
   let string2Array = str2.split('');

   for(let alphabet of string1Array) {
       if(countObj[alphabet]) {
        countObj[alphabet] =  countObj[alphabet] + 1
       } else {
        countObj[alphabet] = 1
       }
      
   }
  

   for(let alphabet of string2Array) {
    if(countObj[alphabet]) {
      countObj[alphabet] = countObj[alphabet]+ 1
    } else {
        countObj[alphabet] = 1
    }
   }

   let resultValues = Object.values(countObj);
   return !!resultValues.reduce(function(a, b){ return (a === b) ? a : NaN; });
}

console.log(findAnagarm("listen", "silent"))
console.log(findAnagarm("pet", "pet"))
