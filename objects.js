// Extract City Facts
function cityFacts(city) {
	return `${city.name} has a population of ${city.population} and is situated in ${city.continent}`;
}



// Does the Object Contain a Given Key?
function hasKey(obj, key) {
	return key in obj;
}


// Check if Number is within a Given Range
function isInRange(num, range) {
	return range.min <= num && range.max >= num;
}


// Write a function that returns true if an object is empty, and false otherwise.
function isEmpty(obj) {
	return !Object.keys(obj).length
}

// Create a function that takes an object and returns the keys and values as separate arrays.
// e.g. [["a", "b", "c"], [1, 2, 3]]

function keysAndValues(obj) {
  return [Object.keys(obj), Object.keys(obj).map(x => obj[x])];
}

function keysAndValues(obj) {
  let arr1 = [], arr2 = []
  for (let key in obj) {
    arr1.push(key)
    arr2.push(obj[key])
  }
  return [arr1, arr2]
}

// Write a function that converts an object into an array, where each element represents a key-value pair.
// toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]
function toArray(obj) {
	return Object.entries(obj);
}

// Check If objOne Is Equal to objTwo
function isEqual(objOne, objTwo) {
	return JSON.stringify(objOne) === JSON.stringify(objTwo);
}