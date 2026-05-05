//function paramater are like local variables they are alive only on function block

/* // deceleration of function
//make a sum function
function sum (a,b) { // this is called paramater where the pass the anything
console.log(a+b);
return a+b;
}
//function call
sum(4,5); // this is called aarguments
*/

/* //make a multiplication function 
 function multiplication (x,y){
    return x*y;
 }

 //call multiplication function
 let multiplyResult = multiplication(3,5);
 console.log(multiplyResult);
 */

 /*
//  deceleration of arrow function
use const or let = (paramater 1, paramater 2)=>{

}
*/

/*
// make a arrow function for sum
let sum =(x,y)=>{
    return x+y;
};
 //call arrow function
let addition = sum(6,7);
console.log(addition);
*/

/*
// make a arrow function for multiplication
let multiplication =(x,y)=>{
    return x*y;
};
 //call arrow function
let multiply = multiplication(6,7);
console.log(multiply);
*/

/*
//create a function using the function keyword that takes a string as an arguments & return the number of vowles in the string

function vowel_letter(letter){
   let count = 0;
for(let i=0;i<letter.length;i++){
    if(letter[i]=="a"||letter[i]=="e"||letter[i]=="i"||letter[i]=="o"||letter[i]=="u"){
        count= count+1;
    }
} 
return count;
}
// call function
let result = vowel_letter("shivam");
console.log(result);
*/

/*
//  same above question solving by arrow function
let  vowel_letter= (letter)=>{
 let count = 0;
for(let i=0;i<letter.length;i++){
    if(letter[i]=="a"||letter[i]=="e"||letter[i]=="i"||letter[i]=="o"||letter[i]=="u"){
        count= count+1;
    }
} 
return count;
}

let result = vowel_letter("shivam");
console.log(result);
*/


/*
for each only works in array 
for each ka work hai array ke har element pr jana aur jo kaam bola hai (function) use sabh element ke liye krna 
for each deceleration by function method 

let fruit=["apple","banana","litchi","mango"];
fruit.forEach(function(freshfruit){
    console.log(freshfruit);
});

or another method 

first make the function then aply for each method
function fruit (fru){
    console.log(fru);
}
apply for each method
veggies.forEach(fruit);
*/
 
/*
deceleration for each method for arrow function
let fruit= ["apple","banana","litchi","mango"];
fruit.forEach((value,index,array) => {
    console.log(value,index,array);
});
 */
   