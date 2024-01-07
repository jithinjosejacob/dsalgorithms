// Add arrays

const arr1 = [1,2,3]

const arr4 = [...arr1, 4,5 ]

console.log(arr1, arr4)

const isArrayEqual = (arr1: number[],arr4: number[])=> {
    if (arr1.length !== arr4.length) {
        return false
    }
    for ( let i=0; i<arr1.length; i++){
        if(arr1[i]!==arr4[i]){
            return false
        }
        return true
    }
}

console.log(isArrayEqual([1,2,3], [4,5,6]))