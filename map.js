// map give a new array
/* map never change in original array
map give a new array */

/* let arr = [45,23,21];
arr.map((value,index,arr)=>{
    console.log(value,index,arr);
})
let a = arr.map((value)=>{
   return  value+1;
    
})
console.log(a); */

const arr = [2, 3, 4];
const newarr = [];
const mul = () => {
  for (let i = 0; i < arr.length; i++) {
    newarr.push(arr[i] * 2);
   
}
console.log(newarr);
};
