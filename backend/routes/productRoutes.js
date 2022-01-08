const express = require('express')
const router = express.Router()
const {getaAllProductById,getaAllProducts} = require('../controller/ProductController')
//@desc GET all products from db
//@route GET /api/products
router.get('/',getaAllProducts)

//@desc GET product by id from db
//@route GET /api/products/:id
router.get('/:id',getaAllProductById)
module.exports= router