require('dotenv').config()
const productSeeder = require('../data/seeder')
const connectDb= require('../config/db')
const product = require('../models/Product')
connectDb()
const impportData =async ()=>{
try{
console.log('seeder is running')
await product.deleteMany({})
await product.insertMany(productSeeder)
console.log('Data import Success')
process.exit()
}
catch(err){
console.log('Error with data import')
process.exit(1)
}
}
impportData()