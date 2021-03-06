// Reverse an Array

function reverse(arr) {
    return arr.reverse();
  }
  
  // Return the Last Element in an Array
  
  function getLastItem(arr) {
    return arr[arr.length - 1];
  }
  
  function getLastItem(arr) {
    return arr.pop();
  }
  
  
  // Join two arrays
  
  function concat(arr1, arr2) {
    return arr1.concat(arr2);
  }
  
  // uses spread syntax
  function concat(arr1, arr2) {
    return [...arr1, ...arr2];
  }
  
  
  
  //  Index of item in an Array - also works for finding strings
  function search(arr, item) {
    return arr.indexOf(item);
  }
  
  // Check if an Array Contains a Given Number
  function check(arr, el) {
      if (arr[arr.indexOf(el)] === el) {
          return true;
      } else {
          return false;
      }
  }
  // or
  function check(arr, el) {
      return arr.includes(el)
  }
  
  
  // Negate the Array of Numbers
  
  function negate(arr) {
      for(let i = 0; i < arr.length; i++) {
          arr[i] = -arr[i];
      }
      return arr;
  }
  
  
  function negate(arr) {
      return arr.map(val => -val);
  }
  
  
  // //Difference of Max and Min Numbers in Array
  function diffMaxMin(arr) {
      return Math.max(...arr) - Math.min(...arr);
  }
  
  
  // Return the First and Last Elements in an Array
  function firstLast(arr) {
      return [arr[0], arr[arr.length-1]]
  }
  
  function firstLast(arr) {
      return [arr.shift(), arr.pop()]
  }
  
  
  // Filter out Strings from an Array, leaving numbers
  function filterList(l) {
    return l.filter(x => Number.isInteger(x));
  }
  
  
  function filterList(l) {
      return l.filter( c => typeof c === 'number');
  }
  
  
  // Remove Null from an Array
  function removeNull(arr) {
      return arr.filter(Boolean);
  }
  
  // Implement a function that returns an array containing all the consecutive numbers in ascendant order from the given value low up to the given value high (bounds included).
  function getSequence(low, high) {
    const sequence = [];
  
    for (let i = low; i <= high; i++) {
      sequence.push(i);
    }
  
    return sequence;	
  }

  // Create a function that takes a number (from 1 to 12) and returns its corresponding month name as a string.
  function monthName(num) {
    const mapping = {
      1: 'January',
      2: 'February',
      3: 'March',
      4: 'April',
      5: 'May',
      6: 'June',
      7: 'July',
      8: 'August', 
      9: 'September', 
      10:	'October', 
      11:	'November', 
      12:	'December'
    };
    return mapping[num];
  }

  function monthName(num) {
    return new Date(2000, num - 1).toLocaleString("en-us", {month: "long"});
  }

