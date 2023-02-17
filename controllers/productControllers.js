const product = require('../models/product').model;
const category = require('../models/category').model;
const usersignup = require('../models/user').model;
const quotationUsers = require('../models/quotation').model;

exports.getProduct = async (req, res) => {
    const productList = await product.findAll();
    res.send(productList); 
}

exports.addProduct = async (req, res, user) => {
    const addnewProduct = {
        product_name: req.body.dname,
        product_price: req.body.dprice,
        product_description: req.body.ddescription,
        product_category: req.body.dcategory,
    }
    const addnewProducts = await product.create(addnewProduct)
    res.send(addnewProducts);
}

exports.deleteProduct = async (req, res) => {
    await product.destroy({
        where: {
            id: req.params.id
        }
    })
}

exports.updateProduct = async (req, res) => {
    await product.update({ 
        product_name: req.body.productName,
        product_price: req.body.productPrice, 
        product_category: req.body.productCategory, 
        product_description: req.body.productDescription, 
    },     
        {
        where: {
            id: req.params.id
        }
    });
}

//Get the list of product categories

exports.getCategory = async (req, res) => {
    const categorytList = await category.findAll();
    res.send(categorytList); 
}

exports.addCategory = async (req, res, user) => {
    const addnewCategory = {
        product_category: req.body.cname,
        category_description: req.body.cdescription,
    }
    const addnewCategories = await category.create(addnewCategory)
    res.send(addnewCategories);
}

exports.deleteCategory = async (req, res) => {
    await category.destroy({
        where: {
            id: req.params.id
        }
    })
}

exports.updateCategory = async (req, res) => {
    await category.update({ 
        product_category: req.body.categoryName,
        category_description: req.body.categoryDescription, 
    },     
        {
        where: {
            id: req.params.id
        }
    });
    
}

// NOT HASHING THE PASSWORD
exports.signupUser = async (req, res, user) => {
    const addnewUser = {
        fullname: req.body.fullname,
        email: req.body.email,
        company: req.body.company,
        total_employee: req.body.totalEmployee,
        zipcode: req.body.zipcode,
        password: req.body.password,
        confirmpassword: req.body.confirmpassword,
    }
    const addnewUserSignup = await usersignup.create(addnewUser)
    res.send(addnewUserSignup);
}

//LOGIN USERS WITHOUT HASHING
exports.loginUser = async (req, res) => {
    const validateUsers = await usersignup.findOne({ 
        where: { 
            email: req.body.email,
            password: req.body.password
        }
     });
     validateUsers === null ?  res.send(validateUsers) : res.send(validateUsers)
  
}

//QUOTATION USERS

//request inquirer
exports.quotationUser = async (req, res) => {
    const {design,quantity,description,userID} = req.body;
    const requestQuatation = await quotationUsers.create({
        userId: userID,
        design: design,
        quantity: quantity,
        description: description
    })
    res.send(requestQuatation);
}

//gett all notifications
exports.getAllNotification = async (req, res) => {

    let notification;
    if (req.query.id) {
        notification = await quotationUsers.findAll(
            {
             where:{
                 userId: req.query.id
             }
         });
    }else {
        notification = await quotationUsers.findAll();
    }
   
    res.send(notification); 
}