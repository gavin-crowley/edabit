// modulus

x % y;

// The remainder in 1%3 refers to what remains of 1 (not 3) after you divide by 3.
// As you have already said, 3 goes into 1 zero times. So -- when you remove 0 multiples
// of 3 from 1, all of 1 remains. Thus 1 % 3 = 1.

// Create a function that returns true if a string is empty and false otherwise.
function isEmpty(s) {
  if (!s) {
    return true;
  } else {
    return false;
  }
}

// or

function isEmpty(s) {
  if (s === "") {
    return true;
  } else {
    return false;
  }
}



///////////

const helloName = name => `Hello ${name}!`;


// Is the Number Even or Odd?

function isEvenOrOdd(num) {
  return num % 2 ? 'odd' : 'even';
  // condition ? exprIfTrue : exprIfFalse

}

function isEvenOrOdd(num) {
  if (num % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}

// Check String for Spaces
function hasSpaces(str) {
	return (/\s/).test(str);
}

function hasSpaces(str) {
	return str.includes(' ')
}


// Count the # Arguments in a function call
function numArgs() {
	return arguments.length;
}

// Return the Total Number of Parameters
function numberArgs() {
	return arguments.length;
}

// Is the Word Singular or Plural?
function isPlural(word) {
	return word.endsWith("s");
}

function isPlural(word) {
	return word[word.length - 1] == 's';
}

// Char-to-ASCII
function ctoa(c) {
	return c.charCodeAt(0);
}

// Case Insensitive Comparison
function match(s1, s2) {
	return s1.toLowerCase() === s2.toLowerCase();
}