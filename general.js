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

// Create a function that checks if the argument is an integer or a string. Return int if it's an integer and str if it's a string.

function intOrString(param) {
  if (typeof param === "number") {
    return "int";
  } else if (typeof param === "string") {
    return "str";
	}
}


// determine if year is leap year 
function isLeap(year) {
	return (year % 400 === 0) || (year % 4 === 0 && year % 100 != 0 ) 
}


// Create a function that takes two integers and checks if they are equal.
const isEqual = (n1, n2) => {
	return typeof n1 === "string" || typeof n2 === "string" ?
		false : n1 === n2;
}

// Convert int to str and vice versa 

function toInt(str) {
	return parseInt(str)
}

function toStr(int) {
	return int.toString()
}



// If the number falls within the range, the number should be returned.
// If the number is less than the lower limit of the range, the lower limit should be returned.
//// If the number is greater than the upper limit of the range, the upper limit should be returned.

const limitNumber = (num, min, max) => Math.max(min, Math.min(max, num));


class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>My First React Component!</h1>
      </div>
    );
  }
};

class ReturnTempPassword extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
            { /* change code below this line */ }
            <p>Your temporary password is: <strong>{this.props.tempPassword}</strong></p>
            { /* change code above this line */ }
        </div>
    );
  }
};

class ResetPassword extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
          <h2>Reset Password</h2>
          <h3>We've generated a new temporary password for you.</h3>
          <h3>Please reset this password from your account settings ASAP.</h3>
          { /* change code below this line */ }
<ReturnTempPassword tempPassWord="abcoiuoabc" />
          { /* change code above this line */ }
        </div>
    );
  }
};
};


/////////////////////////////////////===========///asdad///////////////asdaasdadada
//////////////////////////asdad///////////////////asdad
///////////////////asdasd/////////////mmmm///asdaasdsa
