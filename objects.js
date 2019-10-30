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
  return !Object.keys(obj).length;
}

// Create a function that takes an object and returns the keys and values as separate arrays.
// e.g. [["a", "b", "c"], [1, 2, 3]]

function keysAndValues(obj) {
  return [Object.keys(obj), Object.keys(obj).map(x => obj[x])];
}

function keysAndValues(obj) {
  let arr1 = [],
    arr2 = [];
  for (let key in obj) {
    arr1.push(key);
    arr2.push(obj[key]);
  }
  return [arr1, arr2];
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

// Write a function that takes a string and calculates the number of letters and digits within it. Return the result as an object.
const countAll = str => ({
  LETTERS: (str.match(/[a-z]/gi) || []).length,
  DIGITS: (str.match(/\d/g) || []).length
});
//   e.g. countAll("Hello World") ➞ {"LETTERS":  10, "DIGITS": 0}



// Create a function that returns the frequency distribution of an array. This function should return an object, where the keys are the unique elements and the values are the frequency in which those elements occur.
const getFrequencies = arr =>
  arr.reduce((map, item) => {
    map[item] = map[item] + 1 || 1;
    return map;
  }, {});

// e.g. getFrequencies(["A", "B", "A", "A", "A"]) ➞ { A: 4, B: 1 }


// One of the fun parts of JavaScript is that you can extend all the standard types by extending their prototype. In this challenge, you need to give JavaScript Strings a swapCase() function, which will return a new string with all upper case characters swapped for lower case characters, and vice versa. Any non-alphabetic characters should be kept as they are.

String.prototype.swapCase = function() {
    return Array.from(this, char =>
      char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
    ).join('');
  };

// e.g. "Hello".swapCase() ➞ "hELLO"