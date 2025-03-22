// Your code goes here
const rapid = (myString) => {
    let deleted = [];

    for(let letter of myString.toLowerCase()) {
        if(['a','e','i','o','u'].includes(letter) == false)
            deleted.push(letter.toUpperCase())
    }
    return deleted.join('');
}
// Work above this line; do not change code below
let str = "John";
console.log(rapid(str));