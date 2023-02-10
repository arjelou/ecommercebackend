const express = require('express');
const app = express();
const productRoutes = require('./routes/productRoutes');
const cors = require('cors');
const cookieParser = require('cookie-parser');

app.use(cors({origin: ['http://localhost:3000']}))

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use('/', productRoutes)
app.use('/addnew', productRoutes)

app.listen(4002);