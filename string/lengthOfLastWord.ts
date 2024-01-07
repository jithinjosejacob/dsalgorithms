/* "Hello World"
npx ts-node index.ts

*/

const lengthOf = (str: string) => {
    return (str.trim().split(" ")).length
}


console.log(lengthOf("Hello World"))