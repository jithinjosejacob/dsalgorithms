const person: any = {
    name: "Jithin",
    age: 21,
    "last name": "Jacob",
    place: "Australia",
    skills: ["js", "ts"],
    projects: { 
        frontend: "Freaks",
        backend: "BOO"
    },
    code: function() {
        return "start coding"
    },
    walk: () => {
        return "start walking"
    }
}

// How to access
// Dot operator

console.log(person.age)

// []
console.log(person['age'])
console.log(person["last name"])


console.log(person.hasOwnProperty('name'))

// How to add, update and delete keys.

person.name = "Ravi"
console.log(person.name)

// person.location ="AU"
// console.log(person.location)

// delete person.age

// console.log(person.age)

// Shallow and deep copy

// Shallow copy
const person2 = person

person2.age = '45'

console.log(person, person2)

// Deep copy

const person3 = Object.assign({}, person)

person.location = "GE"

console.log(person, person3)