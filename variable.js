//create the object called product to store info //
const  product = {
    name: "pen",
    rating: 4.5,
    catogary: "stationary item",
    price: 400,
    offer: 5,
};

//change the product price400 to 500//
product.price = 500;

// increase the price by 5 rs//
product.price = product.price + 5;

//print resut command//
console.log(product);

// print the product name
console.log(product.name);

// make a object name is profile  with following details: username, followers, follow or not follow, bio
const profile ={
    userName: "Shivam Singh",
    follow: true,
    followers: 1200,
    bio: "i am full stack developer and ui/ux developer",
}
console.log(profile);

// make a object  for an order info details: fooditeam, price develired or not , rating//
const order={
    foodName:"Dosa",
    price: 100,
    deliverded: false,
    rating:4.5,
}
console.log(order);

const num = 5;
let fact = 1;
for (let i = 1; i <= num; i++) {
    fact = fact*i
    
}
