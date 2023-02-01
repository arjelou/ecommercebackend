const express = require('express');
const app = express();
const productRoutes = require('./routes/productRoutes');
const cors = require('cors');

app.use(cors({origin: ['http://localhost:3000']}))

app.use('/', productRoutes)
app.post('/addnew', productRoutes)

app.listen(4002);