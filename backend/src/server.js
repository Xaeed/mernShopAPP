require('dotenv').config()
const express = require('express')
const app = express()
app.use(express.json())
const connectDb = require('../config/db')

const productRoutes = require('../routes/productRoutes')
const PORT= process.env.PORT || 9091
app.use('/api/products', productRoutes)

connectDb()
app.listen(PORT, () => console.log(`Server is running at ${PORT}`))
