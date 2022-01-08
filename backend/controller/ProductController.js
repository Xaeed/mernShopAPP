const Product = require('../models/Product')


const getaAllProducts = async(req,res)=>{
    try{
        const product = await Product.find({})
        res.json(product)
    }catch(err){
    console.error(err)
    res.status(5000).json({message:err})
    }
}

const getaAllProductById = async(req,res)=>{
    try{
        const product = await Product.findById(req.params.id)
        res.json(product)
    }catch(err){
    console.error(err)
    res.status(5000).json({message:err})
    }
}

module.exports= {
    getaAllProductById,
    getaAllProducts
}