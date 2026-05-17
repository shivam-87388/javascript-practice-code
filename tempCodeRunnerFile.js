/* Create Array of Squares */
const arr = [1,2,3,4];
let square = [];

for (let i = 0; i < arr.length; i++) {
   square.push(arr[i]*arr[i]);
}
console.log(square);