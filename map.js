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

/* Sirf names nikalke ek new array banana hai. 
const user = [ { name: "Shiva", age: 21 },
   { name: "Rahul", age: 22 },
   { name: "Aman", age: 20 }];

   const name =[];

   const userName = (index)=>{
    for (let i = 0; i < user.length; i++) {
        name.push(`index ${user[i].name}`)
    }
    console.log(name);

    call back function
    userName();
}; */

/*
 const user = [ { name: "Shiva", age: 21 },
   { name: "Rahul", age: 22 },
   { name: "Aman", age: 20 }];
   
   const userName = user.map((users) => {
       return users.name;
});
console.log(userName); */

//square of number

/* const arr = [1,2,3,4];

let square = arr.map((num) => {
return num*num;
});
console.log(square); */

/* arrow function
const arr = [1,2,3,4];

const square = (num)=>{
    return num*num;
};

call back
const finalans = arr.map(square);
console.log(finalans)
*/


/* Add 10 to every number by arrow function
const arr = [5,10,15];

const add = (num)=>{
return num + 10;
};

// call back
const final = arr.map(add);
console.log(final);
*/

/* by normal method
const arr = [5,10,15];
const add = arr.map((num) => {
    return num + 10;

});
console.log(add);
*/

/* Convert into uppercase */
const names = ["shivam", "rahul", "aman"];

/* arrow function
const name = (naam) =>{
    return naam.toUpperCase();
};


// call back function
const final =  names.map(name);
console.log(final); */

// normal function
const name = names.map((naam) => {
    return naam.toUpperCase();
})
console.log(name);