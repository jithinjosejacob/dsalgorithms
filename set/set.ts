// Sets

// items should be unique

const set = new Set([1,2,3,1,2,4,5])

console.log(set)

set.add(45)

set.delete(45)

//set.clear()

console.log(set.has(3))

// Iterate set

for (let x of set.keys()){
    console.log(x)
}

console.log("/For Each")

set.forEach((value) => console.log(value))

console.log(set.size)