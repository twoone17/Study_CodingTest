const binarySearch = require('binary-search');

const arr = [1, 2, 3, 4, 5];
const target = 3;

const index = binarySearch(arr, target);
if (index >= 0) {
    console.log(`Found ${target} at index ${index}`);
} else {
    console.log(`${target} not found`);
}