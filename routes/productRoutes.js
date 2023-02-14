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

// SIGNUP ROUTES
router.post('/signup',controller.signupUser)

//LOGIN ROUTES
router.post('/login',controller.loginUser)

//QUOTATION ROUTES
router.post('/quotation',controller.quotationUser)
router.get('/allnotification',controller.getAllNotification)



module.exports = router;