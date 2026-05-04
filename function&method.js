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


//create a function using the function keyword that takes a string as an arguments & return the number of vowles in the string
// function keyword (){
//   if keyword ===
// }
// keyword("hero");

let keyword = "hello";
count = 0;
for(let i=0;i<keyword.length;i++){
    if(keyword[i]=="a"||keyword[i]=="e"||keyword[i]=="i"||keyword[i]=="o"||keyword[i]=="u"){
        count= count+1;
    }
}
console.log(count);

