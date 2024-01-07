const fun = (n: number) => {
    if(n === 0){
        return
    }
    console.log("In fun", n)
    fun(n-1)
}


fun(10)