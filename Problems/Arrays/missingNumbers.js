/*
Question: You are required to find missing numbers that are left out while an artist transports numbers from one array to other. The output array should be sorted.

Input:
arr [ ] = {7, 2, 5, 3, 5, 3}
brr [ ] = {7, 2, 5, 4, 6, 3, 5, 3}

Output:
Missing numbers: {4, 6}
*/



getMissingNumbers = (str1, str2) => {
    let diff = str2.length - str1.length;
    let result = [];
    let i = 0;

    while(result.length != diff) {
       if(str1[i] != str2[i]) {
           result.push(str2[i])
       }
       i++;
    }

    return result;
    
}

console.log(getMissingNumbers([7, 2, 5, 3, 5, 3], [7, 2, 5, 4, 6, 3, 5, 3]))