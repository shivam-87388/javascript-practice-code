import axios from "axios";

const fetchMyUser = async () => {
    try{
        const res = await axios.get("https://jsonplaceholder.typicode.com/users/2");
        console.log("find out the result");
    console.log(`user name:${res.data.name}`);
    console.log(`user company name:${res.data.company.name}`);
    console.log(`user city:${res.data.address.city}`);
    } catch (error) {
             if (error.response) {
        // Server ne reply diya par wo error tha (e.g. 404, 500)
        console.log(`Server Error: ${error.response.status}`);
        console.log(`Message: ${error.response.data.message}`); 
    } else if (error.request) {
        // Request bheji par server se koi jawab nahi aaya (Network issue)
        console.log("Internet check karo yrr, server jawab nahi de raha!");
    } else {
        // Kuch aur hi gadbad ho gayi
        console.log("Error:", error.message);
    }

}


};

const registerUser = async() => {
try {
    const res = await axios.post("https://jsonplaceholder.typicode.com/posts");
    console.log("find the result");
    console.log(`tittle:${res.data.title}`);
    console.log(`body:${res.body}`);
    console.log(`userId:${res.userId}`);
}
    catch{
        console.log("error");

    }

}; 
const getUserById = async(id) =>{
    try{
        const res = await axios.get("https://jsonplaceholder.typicode.com/users/${id}");
        console.log("result match");
       
    }
    catch (error){
        console.log(error);
    }
};

const productData = async() =>{
try{
    const res = await axios.get("http://localhost:5000/api/products")
    console.log(res.data);
}
catch (error){
    console.log(error);
}
};

/* Task 1: Basic Get Request
Scenario: Aapko ek website ke saare "Users" mangwane hain.

URL: https://jsonplaceholder.typicode.com/users

Goal: Ek function banao getUsers jo is URL se data fetch kare aur res.data ko console mein print kare. */

const user = async() =>{
    try{
const res = await axios.get("https://jsonplaceholder.typicode.com/users");
                  console.log(res.data);
}
catch (error){
    console.log(error.message);
    }
};

/* Task 2: Specific Data (ID wala)
Scenario: Aapko sirf User ID 5 ka data chahiye.

URL: https://jsonplaceholder.typicode.com/users/5

Goal: Function ka naam getSingleUser rakho. Isme console mein print karo: "User mil gaya: " + res.data.name. */
const getSingleUser = async(name)=>{
    try{
        const res = await axios.get("https://jsonplaceholder.typicode.com/users/5");
        console.log(res.data.name);

    }
    catch(error){
        console.log(error.message);

    }
};

/* Task 3: Error Handling Practice
Scenario: Aapne galti se galat URL likh diya hai.

URL: https://jsonplaceholder.typicode.com/galat-url

Goal: Code likho jo is URL ko call kare. Ab kyunki URL galat hai, toh control catch mein jayega. Catch ke andar console.log("Kuch gadbad hai: " + error.message) likho. */

const galat = async () =>{
try{
    const res = await axios.get("https://jsonplaceholder.typicode.com/galat-url");
    console.log(res.data);
}
catch (error){
    console.log("something went worng",error.message);
}
};

/* Task 4: Loader Logic (Finally Block)
Scenario: Jab data load ho raha ho, toh aapko message dikhana hai "Loading..." aur jab kaam ho jaye (chahe error aaye ya success), toh message dikhana hai "Kaam khatam!".

Goal: try se pehle console.log("Loading...") likho, aur finally block ka use karke usme console.log("Kaam khatam!") likho. */

const loaderLogic = async ()=>{
console.log("Loading...");
try{
const res = await axios.get("https://jsonplaceholder.typicode.com");
console.log(res.data);
}
catch (error){
    console.log(error.message);
 
}
console.log("Kaam khatam!")
};

/* Challenge 1
Link: https://jsonplaceholder.typicode.com/posts

Result: Mujhe console mein sirf Pehle 3 Posts (Index 0, 1, 2) ke titles chahiye. */

const post = async() =>{
try{ 
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    console.log(res.data.index[0]);
    console.log(res.data.index[1]);
    console.log(res.data.index[2]);
}
catch (error){
    console.log(error.message);
}
};

/* Challenge 2
Link: https://jsonplaceholder.typicode.com/comments?postId=1

Result: Mujhe console mein dikhao ki Post ID 1 par total kitne comments hain? */

const comments = async() => {
try{
    const res = await axios.get("https://jsonplaceholder.typicode.com/comments?postId=1");
    console.log("total comments",res.data.length);
}
catch (error){
    console.log(error.message);
}
};