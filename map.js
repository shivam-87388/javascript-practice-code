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

/* Sirf names nikalke ek new array banana hai. */
const user = [ { name: "Shiva", age: 21 },
   { name: "Rahul", age: 22 },
   { name: "Aman", age: 20 }];

   const name =[];

   const userName = (index)=>{
    for (let i = 0; i < user.length; i++) {
        name.push(`index ${user[i].name}`)
    }
    console.log(name);
};

   userName();

   const userName