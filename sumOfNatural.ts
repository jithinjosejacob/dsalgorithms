/*

Sum of all natural numbers from 1 to n ?.

npx ts-node index.ts

*/

function sumOfNatural(num: number){
    let sum = 0;
    for(let i = 1; i<= num; i ++){
        sum += i
    }
    return sum
    
}


function sumOfNaturalSecond(num: number){
    let sum = 0;
    sum = num * (num+1)/2
    return sum
    
}

console.log(sumOfNatural(5))
console.log(sumOfNaturalSecond(5))