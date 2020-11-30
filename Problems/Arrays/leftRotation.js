/*
Question: You are given an array of integers. After a left rotation of k times, find the resultant array.

Example 1:
Input: arr [ ] = {1, 2, 3, 4, 5}, size = 5, k = 2
Output: {3, 4, 5, 1, 2}

Example 2:
Input: arr [ ] = {4, 8, 15, 16, 23, 42}, size = 6, k = 12
Output: {4, 8, 15, 16, 23, 42}
*/


getLeftRotatedResult = (str, k, size) => {
    let result = str;
    if(k% size == 0) {
        return str;
    } else if( k < size) {
        for(let i=0; i<k; i++) {
            result.push(str.shift());
        }
    } else if( k>  size) {
        let x = k % size;

        for(let i=0; i<k; i++) {
            result.push(str.shift());
        }
    }

    return result;
     
}

console.log(getLeftRotatedResult([1, 2, 3, 4, 5], 2, 5))