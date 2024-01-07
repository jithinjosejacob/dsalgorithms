/*

Sum of all digits in a number

npx ts-node index.ts

*/

function sumOfDigits(num: number){

    let sum = 0
    let stringNum = num.toString()
    for(let i =0 ; i< stringNum.length; i++){
        sum += parseInt(stringNum[i])
    }
    return sum
}

function sumOfDigitsSecond(num: number) {
    let sum = 0;
    while(num > 0){
        sum += num%10
        num = Math.floor(num / 10)
    }
    return sum
}


console.log(sumOfDigits(134))


console.log(sumOfDigitsSecond(1287)) 