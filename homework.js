// 1. Create a function called "remove" that takes an array and a potential
// member of the array, and returns a new array with that member removed.
// For example, `remove(['Cadence', 'Ordel', 'Marion'], 'Marion')` results
// in `['Cadence', 'Ordel']`.
// function remove ["Cadence", "Ordel", "Marion"] << --- definitely not a function

function remove(array, member) {
  let newArray = [];
  for (let name of array) {
    if (name !== member) {
      newArray.push(name);
    }
  }
  return newArray;
}

//
// If the potential member is not in the array, return the array unchanged.
// If the potential member is in the array, remove all instances of it from the array.

// 2. Revisit your "remove" function. Make sure that it does not change the original
// array but instead returns a new array.

// 3. Create a function called "sum" that takes an array of numbers and
// returns the sum of those numbers.
// funtion amountTotal [1, 3, 6, 12]

function sum(scores) {
  let total = 0;
  for (let score of scores) {
    total += score;
  }
  return total;
}

// 4. Create a function called "average" that takes an array of numbers
// and returns the average of those numbers.

function average(scores) {
  let total = sum(scores);
  if (total === 0) return;
  return total / scores.length;
}

//   let total = 0;
//   for (let score of scores) {
//     total += score;
//   }
//   return total / num.length;
//

// 5. Create a function called "minimum" that takes an array of numbers and
// returns the smallest number in that array.

function minimum(scores) {
  if (scores.length === 0) return;
  if (scores.length === 1) return scores[0];
  let final = scores[0];
  for (let score of scores) if (score < final) return score;
}

// 6. There are many techniques to sort arrays in programming. Your programming
// language will likely include the ability to do this. We are going to
// implement sorting ourselves, however.
//
// A "selection sort" is one of the most simple sorting algorithms. To implement it,
// you start with an unsorted array of numbers. You search the array and find the
// smallest number in the array. You then insert that into a new array as the first
// element and remove it from the original array. You continue doing this until
// there are no numbers left in the original array.
//
// Create a function called selectionSort that takes an array of numbers and returns
// a sorted array using the above technique.
//
// Note 1: You do not actually want to delete things from the original array. You
// should copy it first. To copy an array, use the following code:
//
// var arrayCopy = array.slice(0);
//
// Think about why this works.
//
// Note 2: Selection sort can be implemented using one array. Read the explanation at
// https://courses.cs.vt.edu/csonline/Algorithms/Lessons/SelectionSort/index.html
// to see how. This may make more sense to you.

// 7. Create a function called `textList` that takes an array and joins its elements
// into a string separated by commas.
//
// For example, `textList(['Cadence', 'Ordel', 'Marion'])` results in the string
// `"Cadence,Ordel,Marion"`.
