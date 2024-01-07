const arr:any = [1,2, "Num", {star: 'abc'}, [2,4]];
const arr2:any = new Array();

//console.log(arr, arr2)

console.log(arr[0]) // O(1)

arr2.push(5,2,3,4) // O(1)

console.log(arr2)

arr2.pop() // O(1)

console.log(arr2)

arr2.unshift(0) // O(n)

console.log(arr2)

arr2.shift() // O(n)

console.log(arr2)

// Loop through array

console.log('###Loops in Js###')
arr2.forEach((x: any,i: any) => {
    console.log(x, i)
})

for ( let x of arr2){
    console.log(x)
}

console.log("Array Delete and Update Operations using splice")

arr2.splice(1, 1)

console.log(arr2)

arr2.splice(1, 0, 4, 5, 6)

console.log(arr2)

// splce vs slice

const subArr = arr2.slice(1, 4)

console.log(subArr)