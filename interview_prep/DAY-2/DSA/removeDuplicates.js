function removeDuplicate(nums){
   if(nums.length==0){
        return 0
    }
    let uniqueEle=0

    for(let i=1; i<nums.length; i++){
        if(nums[i] !== nums[uniqueEle]){
            uniqueEle++
           nums[uniqueEle]=nums[i]
        }
    }
    return  nums.slice(0, uniqueEle + 1) 
}
console.log(removeDuplicate([1,1,1,2,2,3,4,5]))