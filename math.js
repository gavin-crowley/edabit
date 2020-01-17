// number digits in number

function findDigitAmount(num) {
	return num.toString(10).split('').map(Number).length
}

// alt 

function findDigitAmount(num) {
	return num.toString().length;
}