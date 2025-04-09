
const fruits = ["apple", "apple", "apple", "banana", "cherry"];
const value = 'apple';

const countOccurrences = (arr, val) => {
  return arr.filter(item => item === val).length;
};

const count = countOccurrences(fruits, value);

console.log(count); 