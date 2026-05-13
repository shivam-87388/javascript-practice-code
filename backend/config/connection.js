const mongoose = require ("mongoose")


const connect_db = async()=> {
     try {
        const connection = await mongoose
    } catch (err) {
        console.error("DB Connection Failed:", err.message);
        process.exit(1); // Server band kar do agar DB connect nahi hua
    }
};    

module.exports = connect_db;