require('dotenv').config({path:'.env'});
const mongoose = require('mongoose');
//const url = 'mongodb+srv://test:test123@cluster0.dvxfk.mongodb.net/TestDB?retryWrites=true&w=majority'
const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        console.log('MONGODB connection success');
    } catch (error) {
        console.log(`MONGODB connection fail - error :${error}`);
        process.exit(1);
    }
}

module.exports = connectDB;