function findElement(arr,target){
    let left=0
    let right=arr.length-1
    
    while(left<=right){
        let mid = left + Math.floor((right - left) / 2)
        if(arr[mid]===target){
            return mid
        }
        else if(arr[mid]<target){
            left=mid+1
        }
        else{
            right=mid-1
        }
    }
    return -1
}

console.log(findElement([-1, 0, 3, 5, 9, 12], 9));  // 4
console.log(findElement([-1, 0, 3, 5, 9, 12], 2));  // -1