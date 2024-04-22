"use strict"
// 1- task
function arrayFromRange(min, max) {
    let result = [];
    for (let i = min; i <= max; i++) {
        result.push(i);
    }
    return result;
}

const numbers = arrayFromRange(1, 4);
console.log(numbers);
// 2- task
function arrayFromRange(min, max) {
    let result = [];
    for (let i = min; i <= max; i++) {
        result.push(i);
    }
    return result;
}

const numbers = arrayFromRange(-10, -4);
console.log(numbers);

// 3-task
function search(array, searchElement) {
    for (let element of array) {
        if (element === searchElement) {
            return true;
        }
    }
    return false;
}
let array = [1, 2, 3, 4, 5];
console.log(search(array, 3));
console.log(search(array, 10));
