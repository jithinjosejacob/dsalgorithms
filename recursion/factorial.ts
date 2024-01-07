/*

TC - O(n)

*/
const factorial = (n: number): number => {
    if(n < 1) {
        return 1
    }
    return n*factorial(n-1)
}


console.log(factorial(20))