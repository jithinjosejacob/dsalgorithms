/*

Count of all digits in a number

npx ts-node index.ts

*/



function countOfDigits(num: number){
    return num.toString().length
}

function countOfDigitsSecond(num: number){
    num = Math.abs(num)
    let count = 0;
    do {
        count ++;
        num = Math.floor(num/10)
    }
    while(num > 0)
    return count
}

console.log(countOfDigits(12333))

console.log(countOfDigitsSecond(123))