
// Find the Perimeter of a Rectangle
function findPerimeter(height, width) {
    return (height + width) * 2;
}


// Create a function that takes an array of two numbers and checks if the square root of the first number is equal to the cube root of the second number.

function checkSquareAndCube(arr) {
    return Math.sqrt(arr[0]) === Math.cbrt(arr[1])
}

// or 
function checkSquareAndCube([a, b] = arr) {
    return Math.sqrt(a) === Math.cbrt(b)
}

// ES6: Destructuring Arrays I

const arr = [1, 2, 3, 4, 5, 6]
let a = arr[0]
let b = arr[1]

console.log(a) // outputs 1
console.log(b) // outputs 2

const arr = [1, 2, 3, 4, 5, 6]

const [a, b, c, d, e] = arr
// or 
const [a, b, ...rest] = arr;