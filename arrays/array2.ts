// Shallow Copy

const arr3:any = [1,2,3]

const arrb = arr3

arr3.push(1)

console.log(arr3, arrb)

// Deep Copy

const arrd = [...arr3]

arr3.push(1)

console.log(arr3, arrd)