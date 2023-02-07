const product = require('../models/product').model;
const category = require('../models/category').model;
const usersignup = require('../models/user').model;

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

// USERS SIGNUP
exports.signupUser = async (req, res, user) => {
    const addnewUser = {
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

//LOGIN USERS
exports.loginUser = async (req, res) => {

    // const userValidations = await usersignup.findAll({
    //     whre:{
    //         email: req.body.email,
    //         password: req.body.password
    //     },
    //     if (userValidations) {
            
    //     }
    // });


 const {email, password} = req.body;
 
 try {
    const userEmail = await usersignup.findAll({
        where:{
        email: email,
        password: password
    }
    });
    if (email === email && password === password){
        res.send(userEmail.data)
    };

 }
 catch(err) {
    res.send(err.message);
 }

}