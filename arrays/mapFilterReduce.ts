// Map, Filter and Reduce


const arr8 = [1,2,4]

const newArr8 = arr8.map((elem,i) => elem*elem)
const newArr9 = arr8.map((elem,i) => elem*elem*i)

console.log(newArr8, newArr9)

const newArr10 = arr8.filter((elem,i)=> elem>1)
console.log(newArr10)

const newArr11 = arr8.reduce((acc, elem) => acc + elem,0 )

console.log(newArr11)

// Flat

const y = [1,2,3 ,[4,5],6]

console.log(y.flat())

// find

const firstPositiveNum = arr8.find((elem,i) => elem  > 0)

console.log(firstPositiveNum)