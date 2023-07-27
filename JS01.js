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

