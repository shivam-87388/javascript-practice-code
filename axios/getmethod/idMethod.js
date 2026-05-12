import axios from "axios";


const getUserById = async(id) =>{
    try{
        const res = await axios.get("https://jsonplaceholder.typicode.com/users/${id}");
        console.log("result match");
       
    }
    catch (error){
        console.log(error);
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


/* Challenge 3: Photo ID 100 ka data nikalna hai (ID wala logic). */
const photo = async(id) =>{
    try{
        const res = await axios.get(`https://jsonplaceholder.typicode.com/Posts/${id}`);
        console.log(res.data);
    }
    catch (error){
        
        if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
        } 
        else {
          console.log("something wrong",error.message);  
        }
    }
};
//call function 
photo(100);