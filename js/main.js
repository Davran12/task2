//! #1
let arr = ["dlrow", "olleH"];
arr[0] = arr[0].split("").reverse().join("");
arr[1] = arr[1].split("").reverse().join("");
[arr[0], arr[1]] = [arr[1], arr[0]];
console.log(arr);
//! #2
let num = ["а", "б", "в"];
num.push(4, 3, 5, 5);
console.log(num);
//! #3
let fruits = ["Apple", "Orange", "Pinapple", "Cherry"];
let fruits1 = fruits.shift();
fruits.splice(2, 0, "Apple");
console.log(fruits);
//! #4
let num1 = [18, -7, -21, 44, 31];
num1.sort((a, b) => a - b);
let max = num1[num1.length - 1];
console.log(max);
