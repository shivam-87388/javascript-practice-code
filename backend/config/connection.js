const mongoose = require ("mongoose")


const connect_db = async()=> {
     try {
        const connection = await mongoose.connect(process.env.Mongo_URI);
        console.log(connection,"connect db")
    } catch (err) {
        console.error("DB Connection Failed:", err.message);
        // Server band kar do agar DB connect nahi hua
    }
};    

module.exports = connect_db;