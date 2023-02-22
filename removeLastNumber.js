// `removeLastNumber`

// This function should as its only argument take:

// - an array of numbers

// This function should return a new array of numbers with the last one removed

// ```js
// removeLastNumber([1, 2, 3, 4]);

// /* should return 
// [1,2,3]
// */

function removeLastNumber(array) {
    const newArr = [...array];
    console.log(newArr.splice(-1, 1));
    //return newArr.splice(-1);
}











module.exports = removeLastNumber;