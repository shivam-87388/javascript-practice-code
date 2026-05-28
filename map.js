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
//const names = ["shivam", "rahul", "aman"];

/* arrow function
const name = (naam) =>{
    return naam.toUpperCase();
};


// call back function
const final =  names.map(name);
console.log(final); 

// normal function
const name = names.map((naam) => {
    return naam.toUpperCase();
})
console.log(name); */

/* Get string lengths 
const fruits = ["apple", "banana", "kiwi"];

// arrow function
const fruit = (fr) => {
    return fr.length;

};

const final = fruits.map(fruit);

// string length
console.log(fruit);
// array length
console.log(final.length); 

// normal function
const fruits = ["apple", "banana", "kiwi"];
const fruit = fruits.map((fr) => {
    return fr.length;

})
console.log(fruit); */

/* Extract names from objects
const users = [
  {name: "Shivam", age: 21},
  {name: "Rahul", age: 22},
  {name: "Aman", age: 20}
];  */
// normal method
/* const userName = users.map((name) => {
    return name.name;

});
console.log(userName); */

// arrow function
/* const user = (name) => {
return name.name;
};
// call back function
const final = users.map(user);
console.log(final); */

/* Multiply by 5 
const arr = [1,2,3];
//normal method
 const multiple = arr.map((mult) => {
    return mult*5;
});
console.log(multiple); */

// arrow method
/* const multiple =(num)=> {
    return num*5;
};

// call back function
const final = arr.map(multiple);
console.log(final); */

// Add "Mr." before every name
/* const names = ["Shivam", "Rahul"];
// const salu =  "Mr.";
// normal method
const finalName = names.map((nam) => {
return "Mr. "+nam;
});
console.log(finalName); */

/* // professional method
const names = ["Shivam", "Rahul"];
const salutation = "Mr.";
const finalName = (name)=>{
    return "Mr. "+name;
};
// call back function
const final = names.map(finalName);
console.log(final); */

/* Create a separate arrow function named cube.
Expected Output:
[1,8,27,64]
*/
//const arr = [1,2,3,4];

/* //normal method
const cube = arr.map((num) => {
    return num**3;

});
console.log(cube); */


/* // arrow function
const cube = (num)=>{
    return num**3;
};

// call back

const finalans = arr.map(cube);
console.log(finalans); */


/* // Double the numbers
const arr = [1,2,3,4];

/* //normal method
const double =arr.map((num)=>{
    return num+num;
});
console.log(double); */

/* // arrow function
const double = (number)=>{
return number+number;
};

// call back
const cubeAns = arr.map(double);
console.log(cubeAns); */ 

// Add 18% GST to every price
//const prices = [100, 200, 300];

/* // normal method
const gst = prices.map((rate)=>{
gstrate = rate*18/100;
return rate + gstrate;
})
console.log(gst); */

/* // arrow function
const gst = (rate)=>{
    gstrate = rate*18/100;
 return rate + gstrate;
};

// call back
const finalrate = prices.map(gst);
console.log(finalrate); */

// Add "Mr." before every name
// const names = ["Shivam", "Rahul"];

/* // normal method
const finalName = names.map((username) => {
return `Mr. ${username}`;
});
console.log(finalName); */

/* // arrow function
const name = (username) => {
    return `Mr. ${username}`;

};

const finalName = names.map(name);
console.log(finalName); */


//********************************* filter method ***********************************************

//filter method is used to filtering the data from the given array and return the filtered array

//Get numbers greater than 10
const arr = [5,12,8,20];

// normal method
/* const greaterno = arr.filter((value)=>{
    return value > 10;
});
console.log(greaterno); */
