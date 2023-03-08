const express = require('express');
const app = express();
const productRoutes = require('./routes/productRoutes');
const cors = require('cors');

require('dotenv').config({path: "./.env"})

app.use(cors({origin: ['https://ecommerce-blue-gamma.vercel.app/']}))
// app.use(cors('*'))


app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use('/', productRoutes)

app.listen(process.env.MYSQLPORT || process.env.PORT);
