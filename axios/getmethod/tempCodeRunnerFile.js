/* Challenge 1: Ek specific User ki list
Sawal: Mujhe sirf User ID 5 ke saare "Todos" dikhao.

URL: [https://jsonplaceholder.typicode.com/todos](https://jsonplaceholder.typicode.com/todos)

Params: { userId: 5 }

Task: res.data.length print karo aur dekho kya woh 200 se kam hai? */
const user = async()=>{
   
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
user();