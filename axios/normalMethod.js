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
        if(error.response){
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


const user4 = async() => {
   
    try{
        const res = await axios.get("https://jsonplaceholder.typicode.com/todos",{
            params: {
             userId: 5
            }
            
        })
        console.log(res.data);
    }
    catch (error){
        if(error.response){
            console.log(error.response.data);
            console.log(error.response.status);
        }
        else if (error.request) {
            console.log(error.request);
            
        } else {
            console.log('Error', error.message);
        }

        }
};

// call function
user4();


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


/* Scenario A: Shop Owner ka Dashboard
Maan lo aap Telibagh ki ek electronic shop ke liye software bana rahe ho.

Zaroorat: Shop owner ko ek button dabate hi apne store ke saare mobile phones dekhne hain jo 'Samsung' brand ke hain.

Socho: Kya yahan aap ek-ek mobile ki ID mangoge ya poori list par filter lagaoge? Isme aapka output Array [] hona chahiye ya Object {}? */
const shop1 = async(company) =>{
    try{
        const res = await axios.get("https://fakestoreapi.com/products",{
            params:{
                brand: company,

            }
        })
        
        console.log(res.data.length);
        console.log(res.data);
    }
    catch (error){
        if (error.response){
            console.log(error.response.status);
            console.log(error.response.data);
        }
        if (error.request) {
            console.log(error.request);
            
        } else {
            console.log(error.message);
            
        }

    }
};
// call function
shop1("samsung");

/* Scenario B: Customer Profile Page (The "Specific" Task)
Maan lo aapne Telibagh wali shop ke liye ek dashboard banaya hai.

Zaroorat: Shop owner ke paas ek lambi list hai. Wo kisi ek specific customer ka poora kacha-chittha (address, phone, email) dekhna chahta hai.

Data: Us customer ki unique ID hai 2. */
const shop2 = async (id) => {
    try {
        const res = await axios.get(`https://fakestoreapi.com/${id}`)
        console.log(res.data.address);
        console.log(res.data.phone);
        console.log(res.data.email);
    } catch (error) {
        if(error.response){
            console.log(error.response.status);
            console.log(error.response.data);
        }
        if (error.request) {
            console.log(error.resquest);
            
            
        } else {
            console.log(error.message);
            
      }  
    }
       
};

// call back
shop2(2);

/* Scenario C: Admin Inventory Audit (Mixed Logic)
Maan lo tum Lucknow ke us shop owner ke liye ek "Stock Checker" bana rahe ho.

Zaroorat: Owner ko apni dukaan ke sirf "Electronics" wale saare products dekhne hain, lekin wo poori list nahi dekhna chahta. Wo chahta hai ki sirf shuruat ke 3 products hi screen par dikhen (taaki page jaldi load ho).

Data: Category hai electronics aur limit hai 3. */

const inventory = async(count)=>{
    try {
        const res = await axios.get("https://fakestoreapi.com/products/category/electronics",{
            params:{
                electronicsItems:count,
            }
        })
        const items = res.data;
        console.log(items.slice(0,3));

    } catch (error) {
        if (error.response){
            console.log(error.response.status);
            console.log(error.response.data);
        }
        if (error.request) {
            console.log(error.request.data);
            
        } else {
            console.log(error.message);
            
        }
    }

};
inventory(3);

