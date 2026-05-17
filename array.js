// /*deceleration of array
// [23,24,34,"Shivam"]*/

// // make a variable of array
// let arr = [24,45,89,"Shivam"];

// // print arry
// console.log(arr);

// // length is starting from 1
// // print the array length

// console.log(arr.length);

// // index number is starting from 0
// // print the index of array
// console.log(arr[1]);

// // sum of a array
// let array = [10,20,30];
// add = 0;
// for( let i=0; i<array.length;i++){
//     add = add+array[i];
// }

// console.log(add);

//
// if(avg>=50){
//     console.log(pass);
// }
// }

/*Use loop to print each element.
    let arr = [5, 10, 15];
    for(let i =0;i<arr.length;i++){
        console.log(arr[i]);
    }*/

/*Find max number*/
//    let arr = [12, 45, 7, 89, 33];
//    max = arr[0];
//    for(let i =1; i<arr.length;i++){
//     if(max>arr[i]){

//     }
//    }
// console.log(maxno);

// let marks = [40, 75, 50, 80, 30, 45];
// sum = 0;

// for(let i=0; i<marks.length;i++){
// sum = sum+marks[i];
// avg=sum/marks.length;
// }
// if(avg>=50){
//     console.log("pass");
// }else{
//     console.log("fail");
// }

/*let arr =[10,520,3,8];
minimun = arr[0];
for(i=1;i<arr.length;i++){
    if(minimun>arr[i]){
        minimun=arr[i];
    }
}
console.log(minimun);*/

// let arr = [2,5,8,11,14];
// sum = 0;
// for(i=0;i<arr.length;i++){

// }
// console.log(arr[i]);

// find the index no of given colour
/* colour = ["red","blue","green","yellow"];
index = 0;
for(let i = 0; i<colour.length;i++){
    if(colour[i]==="green"){
        index = i;
    }
}
console.log(index);*/

// another method

/*
colour = ["red","blue","green","yellow"];
index = colour.indexOf("green");
console.log(index);
*/

//Jinki salary 30,000 se kam hai, unki seat par jaakar 5000 jodo aur Ye gino ki kitne logon ko bonus mila.
/* let arr = [20000, 45000, 15000, 60000, 25000];
count = 0;

for (let i=0; i<arr.length;i++){
    if(arr[i]<=30000){
     arr[i] = arr[i]+5000;
      count = count+1;
    
     console.log(i);
    }
}
 console.log(arr);
 console.log(count); */

//add an element at end by push method
/* let fruit = ["banana","apple","watermelon","papaya"];
 //fruit.push("grapes"); //add grapes at end
 console.log(fruit); */

//remove an element at end by pop method
/* let fruit = ["banana","apple","watermelon","papaya"];
fruit.pop("papaya"); //remove grapes from end
console.log(fruit); */

//add an element at starting by unshift method
/* let fruit = ["banana","apple","watermelon","papaya"];
 fruit.unshift("grapes"); //add grapes at starting
 console.log(fruit); */

//remove an element from starting by shift method
/* let fruit = ["banana","apple","watermelon","papaya"];
 fruit.shift("banana"); //remove banana from starting
 console.log(fruit); */

//remove an element by using index number by using slice  method
/* let fruit = ["banana","apple","watermelon","papaya"];
fruit = fruit.slice(1,3); //remove element by using slice(staring index no, end index no) remember not include end index element
 console.log(fruit); */

//add or remove an element by using index number by using splice  method
/* let fruit = ["banana","apple","watermelon","papaya"];
fruit.splice(1,2,"grapes","kiwi"); //remove element by using slice(staring index no, end index no, add element)
console.log(fruit); */

/* create an array to store companies : bloomberg , microsoft, uber, google, ibm, Netflix
 remove the first company from the array add add amazon company at the end */
/* let companies = ["bloomberg","microsoft","uber","google","ibm","netflix"]

// remove the first company from the array
//  companies.splice(0,1); 
//  console.log(companies);

 //remove the uber company & add the ola company in its place
 companies.splice(2,1,"ola");
 console.log(companies); */

/* let arr = [5, 2, 9, 1];
 let max = arr[0];
 for (let i = 0; i < arr.length; i++) {
   if (max < arr[i]) {
     max = arr[i];
   }
 }
 console.log(max); */

/* let arr = [1,2,4,7,8];
 count = 0;
 
 for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        count = count+ arr[i]
    }
    
}
console.log(count); */

/* Write a JavaScript program to find the largest even number from a given array.
const arr =  [3,8,2,11,14,16];
const maxno = [];



for (let i = 0; i < arr.length; i++) {
   if (arr[i]%2==0) {
  maxno.push(arr[i]);
}
}
big = maxno[0];
for (let i = 0; i < maxno.length; i++) {
  if (big < maxno[i]) {
    big = maxno[i]
}
}
console.log(big);
*/

/* Sum of Odd Numbers 

const arr = [1,2,3,4,5];
const no = [];
 sum = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !=0 ){
     no.push(arr[i]);

    }
         
}for (let i = 0; i < no.length; i++) {
sum  = sum+no[i];
}
console.log(sum); */

/* Count Negative Numbers 
const arr = [3, -1, 7, -9, 2, -5];
let count = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] < 0) {
    count = count + arr[i];
  }
}
console.log(count++); */

/* find the samllest no 
const arr = [7,2,9,1,5];
let sum = arr[0];
let max = 0;
for (let i = 0; i < arr.length; i++) {
    if (sum > arr[i]) {
        sum = arr[i];

        
    }
}
console.log(sum);
*/
