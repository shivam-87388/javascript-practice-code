/* map never change in original array
map give a new array */


let arr = [45,23,21];
arr.map((value,index,length)=>{
    console.log(value,index,length);
})
let a = arr.map((value)=>{
   return  value+1;
    
})
console.log(a)
map