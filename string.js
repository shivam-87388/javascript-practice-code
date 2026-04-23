let name = "shivamsingh";

//print the string length
console.log(name.length);

//print index no of string
console.log(name[3]);

// print name in uppercase
console.log(name.toUpperCase());

// print name in lowercase
console.log(name.toLowerCase());
 
// cut any part from a string: variable name .slice(starting value,end value)
console.log(name.slice(2,4));

// join one string variable with second variable
let firstName = "shivam";
lastName ="singh";
console.log("full name :",firstName.concat(lastName));

//replace any prt in string
// variable name .replace(change jisko krna hai vo value,aur new value)
console.log(name.replace("singh","Singh"));

//print a single character by index no
console.log(name.charAt( 2 ));

/*practice ques: Prompt the user to enter their full name. Generate a username for them based on the input.
Start username with @, followed by their full name and ending with the fullname length.
eg: user name = “shivamsingh” , username should be “@shivamsingh1a”*/
let userName = "shivamsingh";
console.log("@"+userName.toUpperCase() + userName.length);
