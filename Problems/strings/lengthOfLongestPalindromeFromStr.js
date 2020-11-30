let str1 = "racecar"

getLongestPalindrome = (str) => {
    let prev = -1;
    let curr = 0;
    let next = 1;
    let strArray = str.split('');
    let result = [];


    while(curr != strArray.length && prev > -1 && next < strArray.length) {
        if(str[prev] != str[next]) {
            prev++
            next++
            curr++
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