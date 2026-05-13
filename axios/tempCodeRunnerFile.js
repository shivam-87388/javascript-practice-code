/* Scenario C: Admin Inventory Audit (Mixed Logic)
Maan lo tum Lucknow ke us shop owner ke liye ek "Stock Checker" bana rahe ho.

Zaroorat: Owner ko apni dukaan ke sirf "Electronics" wale saare products dekhne hain, lekin wo poori list nahi dekhna chahta. Wo chahta hai ki sirf shuruat ke 3 products hi screen par dikhen (taaki page jaldi load ho).

Data: Category hai electronics aur limit hai 3. */

const inventory = async(count)=>{
    try {
        const res = await axios.get("https://fakestoreapi.com/products/electronic/",{
            params:{
                electronics:count,
            }
        })
        const items = res.data;
        items.slice(0,3);
        console.log(items);

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