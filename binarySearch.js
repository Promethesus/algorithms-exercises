// can be used on sorted array 
// let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]


//binary search using recursion 
// function binarySearch(array,target, startIndex=0){ 
//     let middleIndex = Math.floor(array.length/2)
//     let value = array[middleIndex]
//     if(value == target){
//         return middleIndex +startIndex
//     }else if(array.length == 1){
//         return -1
//     }
//     else if(target > value){
//         return binarySearch(array.slice(middleIndex+1), target, middleIndex+1)
//     }else{
//         return binarySearch(array.slice(0,middleIndex), target, startIndex)
//     }
// }

// console.assert(binarySearch(array,7.5)==-1 , "binarySearch found 16 at index 15")
// console.log(binarySearch(array,7.5))


// [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20] .startindex = 0, middleIndex = 10
// [1,2,3,4,5,6,7,8,9], 
// [5,6,7,8,9]


const array1 = ([
    { id: 1, name: "Sam" },
    { id: 3, name: "Sarah" },
    { id: 5, name: "John" },
    { id: 6, name: "Burke" },
    { id: 10, name: "Simona" },
    { id: 12, name: "Asim" },
    { id: 13, name: "Niki" },
    { id: 15, name: "Aysegul" },
    { id: 17, name: "Kyle" },
    { id: 18, name: "Jem" },
    { id: 19, name: "Marc" },
    { id: 21, name: "Chris" },
    { id: 22, name: "jeremy"},
    { id: 23, name: "Rory"},
    { id: 24, name: "Ben" }
  ])

// binary search using using whhile loop 
function binarySearch(array, target){ 
    left = 0 
    right = array.length -1
    while(left <= right){
        mid = (left+right)/2
        if (target === array[mid].id){
            return array[mid]
        }else if(target > array[mid].id){ 
            left = mid + 1
        }else {
            right = mid - 1
        }
    }
    return -1
}
console.log(binarySearch(array1,5))
