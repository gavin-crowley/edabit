
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