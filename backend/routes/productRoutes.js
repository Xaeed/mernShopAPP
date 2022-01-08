const express = require('express')
const router = express.Router()
//@desc GET all products from db
//@route GET /api/products
router.get('/',(req,res)=>{
    res.send()
})

//@desc GET product by id from db
//@route GET /api/products/:id
router.get('/:id',(req,res)=>{
    res.send()
})
module.exports= router