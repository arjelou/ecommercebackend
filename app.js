const express = require('express');
const app = express();
const productRoutes = require('./routes/productRoutes');
const cors = require('cors');

require('dotenv').config({path: "./.env"})

app.use(cors({origin: ['http://containers-us-west-74.railway.app:5611']}))
// app.use(cors({origin: ['http://localhost:3000']}))
// app.use(cors('*'))


app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use('/', productRoutes)
app.use('/addnew', productRoutes)

// app.listen(process.env.MYSQLPORT || PORT);
app.listen(process.env.MYSQLPORT || 3306);
