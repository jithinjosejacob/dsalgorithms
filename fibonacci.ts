const fibonacci = (num: number) => {
    if(num < 2 ){
        return num
    }
    let prev =0, current = 1, next;
    for(let i =2; i<=num ; i++) {
        next = prev+current
        prev = current
        current = next
    }
    return next

}

console.log(fibonacci(4))