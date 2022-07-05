// can be used on sorted array 
let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

function binarySearch(array,target, startIndex=0){ 
    let middleIndex = Math.floor(array.length/2)
    let value = array[middleIndex]
    if(value == target){
        return middleIndex +startIndex
    }else if(array.length == 1){
        return -1
    }
    else if(target > value){
        return binarySearch(array.slice(middleIndex+1), target, middleIndex+1)
    }else{
        return binarySearch(array.slice(0,middleIndex), target, startIndex)
    }
}

console.assert(binarySearch(array,7.5)==-1 , "binarySearch found 16 at index 15")
console.log(binarySearch(array,7.5))


// [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20] .startindex = 0, middleIndex = 10
// [1,2,3,4,5,6,7,8,9], 
// [5,6,7,8,9]