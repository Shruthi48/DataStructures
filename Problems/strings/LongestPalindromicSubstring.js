/* Let us suppose that we are given a string ‘str’. You need to find out the longest palindrome as a substring. Note that the elements of the string should be contagious.

Example 1:
Input: "aaebabad"
Output: "bab"
Note: "aba" is also a valid answer

Example 2:
Input: "cbeereed"
Output: "eeree"*/
  


let str1 = "madamracecare"

getLongestPalindrome = (str) => {
    let prev = -1;
    let curr = 0;
    let next = 1;
    let strArray = str.split('');
    let result = [];


    while(curr != strArray.length && prev >= -1 && next < strArray.length) {
        console.log(prev, curr, next)
        if(str[prev] != str[next]) {
            curr++
            prev = curr-1
            next = curr+1
        }
    
        if(str[prev] == str[next]) {
           if(!result.length) {
               result.push(str[next])
               result.push(str[curr])
               result.push(str[prev])
           } else {
            result.push(str[next])
            result.unshift(str[prev])
           }
           prev--;
           next++;
        }



    }

    return result;

}

console.log(getLongestPalindrome(str1))