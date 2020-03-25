// Create a function that takes a number (from 1 - 60) and returns a corresponding string of hyphens.
function Go(num) {
	return "-".repeat(num);
}
// else.g. Go(5) ➞ "-----"

// asdasdasd


// Write a function that takes an integer and returns a string with the given number of "a"s in Edabit.
function howManyTimes(num) {
	return 'Ed' + "a".repeat(num) + 'bit';
}


// Additive Inverse
function additiveInverse(arr) {
	for (var i = 0; i < arr.length; i++) {
		arr[i] = -arr[i];
	}
	return arr;
}

function additiveInverse(arr) {
	return arr.map(x => -x);
}
// additiveInverse([5, -7, 8, 3]) ➞ [-5, 7, -8, -3]



// Create a function that adds a string ending to each member in an array.
function addEnding(arr, ending) {
	return arr.map(word => word + ending);
}

function addEnding(arr, ending) {
	for (var i = 0; i < arr.length; i++) {
		arr[i] = arr[i] + ending;
	}
	return arr;
}
// addEnding(["clever", "meek", "hurried", "nice"], "ly")
// ➞ ["cleverly", "meekly", "hurriedly", "nicely"]



// Generate a Countdown of Numbers in an Array
function countdown(start) {
	let arr = []
	for (let i = start; i >= 0; i--) {
		arr.push(i)
	}
	return arr
}

const countdown = start => [...Array(start + 1).keys()].reverse();
// countdown(5) ➞ [5, 4, 3, 2, 1, 0]