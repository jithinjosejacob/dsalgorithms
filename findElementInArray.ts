// Find Element in Array.

const findElementInArray = (num: number, numArray: number[]) => {

    for ( let x of numArray){
        if (x === num) {
            return true
        }
    }

    return false

}




console.log(findElementInArray(2, [1,2,4]))


console.log([2,3,5].includes(2))

console.log("Hello".includes('el'))