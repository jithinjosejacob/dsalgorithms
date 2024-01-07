
function isPalindrome(num: number){
    return num.toString().split('').reverse().join("")

    //return num.toString() === num.toString().split("").reverse().join("");
}

function isPalindromeSecond(num: number) {
    let copyNum =num 
    let reverse = 0;
    while(copyNum> 0){
        const lastDigit = copyNum%10
        reverse = reverse * 10 + lastDigit
        copyNum = Math.floor(copyNum/10)
    }

    return num == reverse
}


// console.log(isPalindrome(123))

console.log(isPalindromeSecond(123))