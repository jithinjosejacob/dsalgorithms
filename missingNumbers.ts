
const missingNumber = (numArray: number[]) => {
    let sum = 0
    let arrayLength = numArray.length + 1
    for(let i =0; i< numArray.length; i++){
        sum += numArray[i];
    }
    return arrayLength*(arrayLength+1)/2 - sum;
}



console.log(missingNumber([1,2,4]))