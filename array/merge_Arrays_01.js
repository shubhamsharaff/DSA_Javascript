// Function to Merge two Arrays using Third array
function mergeArray(arr1, arr2) {
    let arr = []
    for (i = 0; i < arr1.length; i++) {
        arr[i] = arr1[i]
    }
    for (i = 0; i < arr2.length; i++) {
        arr[arr1.length + i] = arr2[i]
        // arr[arr.length] = arr2[i] 
        // It will also give same output
    }
    return arr
}

let arr1 = [1, 2, 3]
let arr2 = [10, 20, 30]
let output = mergeArray(arr1, arr2);
console.log(output)
