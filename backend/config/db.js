require('dotenv').config()
const mongoose = require('mongoose')

const connectDb = async() =>{
    try{
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
       console.log('MongoDb connection SUCCESS')
    }
    catch(err){ 
        console.error(`Error while connecting to mongoDb`, err)
        process.exit(1)
    }
}

module.exports = connectDb
