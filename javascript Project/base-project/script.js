// Generating a random array of numbers
let array1 = [3, 8, 12, 5, 17, 9, 4, 11];

// Using map with the provided callback function
let newArr = array1.map((curElem, index, arr) => {
    console.log(`Current Element: ${curElem}`);
    console.log(`Index: ${index}`);
    console.log(`Original Array: ${arr}`);
    console.log('---');

    return curElem > 9;
});

console.log("Original Array:", array1);
console.log("New Array:", newArr);
