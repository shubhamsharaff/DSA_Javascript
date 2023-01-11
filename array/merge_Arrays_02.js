// We are going to use concat method to merge two Arrays 

// Using concat() method
//-------------------------------------------------------------------------------------
function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let mergedArray = mergeArrays(array1, array2);

// This use the concat method that concatenates the elements of the arrays
// you can also use spread operator with concat
// let mergedArray = [...array1, ...array2]; 

console.log(mergedArray); // [1, 2, 3, 4, 5, 6]
//-------------------------------------------------------------------------------------

// Using Array.prototype.push.apply();
//-------------------------------------------------------------------------------------
/*
    let array1 = [1, 2, 3];
    let array2 = [4, 5, 6];
    Array.prototype.push.apply(array1, array2);
    console.log(array1);

*/
//-------------------------------------------------------------------------------------