(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
var names = ['michael', 'trey', 'jason', 'kevin'];
    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
console.log(names.length);
    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
for(var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
names.forEach(function(named) {
    console.log(named);
    });
    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
//First
var arr1 = [1,2,3,4,5];
function returnFirst(arr) {
    return arr[arr.length -5];
}
// function returnFirst(arr){
//     return arr[0];
// }
console.log(returnFirst(arr1));

//Second
var arr2 = [1,2,3,4,5];
function returnSecond(arr) {
    return arr[arr.length -4];
    }
console.log(returnSecond(arr2));

//Last
var arr3 = [1,2,3,4,5];
function returnLast(arr) {
    return arr[arr.length -1];
    }
    console.log(returnLast(arr3));

})();
