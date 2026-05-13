const mongoose = require ("mongoose")


const url = process.env.Mongo_URI;
const connect_db = ()=> {
mongoose.connect(url)
    .then((result) => {
        console.log("database connected");
    }).catch((err) => {
        console.log("database connection failed");
    });
};

    module.exports = connect_db;