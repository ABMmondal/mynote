const mongoose = require('mongoose');
// const mongoURI ="mongodb://localhost:27017/";
const mongoURI ="mongodb://127.0.0.1:27017/";

// 1st type
// const connectToMongo = ()=>{
//     mongoose.connect(mongoURI)
//         console.log('mongo connected')
    
// }

// // 2nd 
const connectToMongo = async () => {
    try {
        // mongoose.set('strictQuery', false)
        mongoose.connect(mongoURI) 
        console.log('Mongo connected')
    }
    catch(error) {
        console.log(error)

    }
    }
module.exports = connectToMongo