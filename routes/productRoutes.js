const express = require('express');
const router = express.Router();
const controller = require('../controllers/productControllers');

router.get('/',controller.getProduct)
router.post('/addnew',controller.addProduct)
router.delete('/product/:id',controller.deleteProduct)
router.put('/update/:id',controller.updateProduct)

// CATEGORY ROUTES
router.get('/category',controller.getCategory)
router.post('/add-new-category',controller.addCategory)
router.delete('/category/:id',controller.deleteCategory)
router.put('/update-category/:id',controller.updateCategory)






module.exports = router;