/*

[1,2,3,4,5,6,7,8]

SC - O(n)

*/


const arrrand = [1,2,3,4,5,6,7,8]

const linsearch = (num:number[], n:number) =>{
    for(let i =0; i<num.length; i++){
        if(num[i] === n){
            return i
        }
    }
    return -1
}

console.log(linsearch(arrrand, 10))

console.log(arrrand.indexOf(6))

console.log(arrrand.findIndex((num) => (num < 2 )))