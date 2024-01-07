// Object Methods

const person4: any = {
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

//Freeze and seal

//Freeze - cannot add,delete and update keys.

Object.freeze(person4)

console.log(Object.isFrozen(person4))

/* person4.age = "60"

console.log(person4) */

// Cannot add/delete keys, but can update keys.
Object.seal(person4)

/* person4.age = "60" */

console.log(person4) 

console.log(Object.isSealed)

// Loop
console.log("####For Loop####")

for(let key in person4){
    console.log(key, person4[key])
}