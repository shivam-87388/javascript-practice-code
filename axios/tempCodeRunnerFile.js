const inventory = async()=>{
    try {
        const res = await axios.get("https://fakestoreapi.com/electronic/products",{
            params:{
                item: electronics,
            }
        })
        console.log(res.data[0]);
        console.log(res.data[1]);
        console.log(res.data[2]);


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