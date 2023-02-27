const express = require('express');
const app = express();
const productRoutes = require('./routes/productRoutes');
const cors = require('cors');

require('dotenv').config()

// app.use(cors({origin: ['http://localhost:3000']}))
app.use(cors())


app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use('/', productRoutes)
app.use('/addnew', productRoutes)

app.listen(process.env.PORT);