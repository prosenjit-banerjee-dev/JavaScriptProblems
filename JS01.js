// Problem 01
function reverseString(input) {
  let reversed = "";
  for (let i = input.length - 1; i >= 0; i--) {
    reversed += input[i];
  }
  return reversed;
}
const example = "hello world";
const output = reverseString(example);
console.log(output);

// Problem 02
function sumPositiveNumbers(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum;
}
const inputArray = [2, -5, 10, -3, 7];
const result = sumPositiveNumbers(inputArray);
console.log(result);

// Problem 03
function mostFrequentElement(array) {
  let mostFrequentElement = array[0];
  let mostFrequentFrequency = 1;

  for (let element of array) {
    if (array.includes(element) > mostFrequentFrequency) {
      mostFrequentElement = element;
      mostFrequentFrequency = array.includes(element);
    }
  }
  return mostFrequentElement;
}

// Problem 04
function findTwoNumbers(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}
// Problem 05
function calculator(num1, operator, num2) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2;
    default:
      return "Invalid operator";
  }
}
// Problem 06
function generateRandomPassword(length) {
  let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+";
  let password = "";
  for (let i = 0; i < length; i++) {
    let character = characters[Math.floor(Math.random() * characters.length)];

    password += character;
  }

  return password;
}


// Problem 07
function romanToInt(roman) {
  const romanNumbers = {
    I: 1,
    V: 5,
    X: 10,
  };
  let result = 0;

  for (let i = 0; i < roman.length; i++) {
    const currentVal = romanNumbers[roman[i]];
    const nextVal = romanNumbers[roman[i + 1]];

    if (nextVal > currentVal) {
      result += nextVal - currentVal;
      i++;
    } else {
      result += currentVal;
    }
  }

  return result;
}
// Problem 08
function secondSmallestElement(array) {
  array.sort((a, b) => a - b);
  return array[1];
}