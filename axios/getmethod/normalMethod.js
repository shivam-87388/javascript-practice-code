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


/* Challenge 3 (The Error Trap)
Link: https://jsonplaceholder.typicode.com/invalid-data-path

Result: Aapka code crash nahi hona chahiye. Console mein ek professional message aana chahiye: "Error: Resource not found (404)". */

const challenge3 = async () => {
    try{
      const res = await axios.get("https://jsonplaceholder.typicode.com/invalid-data-path");
      console.log(res.data);
    }
    catch (error){
        console.log(error.response.status);
    }
};

/* Challenge 4 (The Nested Data)
Ab iska code likho, ismein aapko "Sidi" (Stairs) ki tarah niche utarna hai data nikalne ke liye.

Link: https://jsonplaceholder.typicode.com/users/1 */

const chalange4= async() =>{
    try{
        const res = await axios.get("https://jsonplaceholder.typicode.com/users/1")
        console.log(res.data.address.street);
        console.log(res.data.address.city);
        console.log(res.data.address.zipcode);
    }
    catch (error){
        if(error.message){
         console.log(error.message);
        }
        if (error.response) {
            console.log(error.response.status);
        } 
        else {
          console.log("something wrong");  
        }
        
        
    }

};


/* Challenge 1: Ek User ke saare Posts
Maqsad: Mujhe sirf User ID 2 ke posts chahiye.

URL: https://jsonplaceholder.typicode.com/posts

Filter: userId hona chahiye 2.

Kaise likhna hai: axios.get(URL, { params: { userId: 2 } }) */
// const posts = async() => {
//     try{
//         const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`,{
//             params:
//             {

//             }
//         })
//     }
//     catch (error){

//     }
// };

const step1 = async()=>{
    try{
        const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
        console.log(res.data.length);
    }
    catch (error){
        console.log(error.message);
    }
};

step1();