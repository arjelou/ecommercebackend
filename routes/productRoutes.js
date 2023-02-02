const express = require('express');
const router = express.Router();
const controller = require('../controllers/productControllers');

router.get('/',controller.getProduct)
router.post('/addnew',controller.addProduct)
router.delete('/product/:id',controller.deleteProduct)
router.put('/update/:id',controller.updateProduct)



module.exports = router;