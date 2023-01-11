let arr = [3,2,4]
let target = 6 
for(let i=0 ; i<arr.length;i++){
    if(arr[i]+arr[i+1]===target){
        console.log(i,i+1)
    }
}