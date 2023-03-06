const express = require('express');
const app = express();
const productRoutes = require('./routes/productRoutes');
const cors = require('cors');

require('dotenv').config({path: "./.env"})

app.use(cors({origin: ['https://ecommerce-arjelou.vercel.app/']}))
// app.use(cors({origin: ['http://localhost:3000']}))
// app.use(cors('*'))


app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use('/', function(req, res) {
    res.send('WELCOME TO MY API, just user /product');
})
// app.use('/addnew', productRoutes)

// app.listen(process.env.MYSQLPORT || PORT);
app.listen(process.env.MYSQLPORT);
