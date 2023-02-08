const product = require('../models/product').model;
const category = require('../models/category').model;
const usersignup = require('../models/user').model;
const bcrypt = require('bcrypt');

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
// exports.signupUser = async (req, res, user) => {
//     const addnewUser = {
//         email,
//         company,
//         totalEmployee,
//         zipcode,
//         password,
//         confirmpassword } = req.body;

//         bcrypt.hash(password && confirmpassword, 5).then((ha) =>{
//             usersignup.create({
//                 email: email,
//                 company: company,
//                 total_employee: totalEmployee,
//                 zipcode: zipcode,
//                 password: ha,
//                 confirmpassword: ha
//             }).then(() =>{
//                 res.send(usersignup);
//             }).catch((err) =>{
//                 res.status(400).json({error: err});
//             })
//         })
// }

// NOT HASHING THE PASSWORD
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

// exports.loginUser = async (req, res) => {
 
//     const {email,password} = req.body;

//     const user = await usersignup.findOne({ 
//         where: { 
//             email: email,
//         } });

//     if (!user) {
//         console.log("Invalid email");
//          res.send(user);
//         return true;
//     }else{
//         console.log("Correct email");
//         res.send(user);
//     }

//     const dbPassword = user.password;
//     bcrypt.compare(password,dbPassword).then((match) => {
//         if (!match){
//             console.log("invalid password");
//             res.send(user.dbPassword);
//             console.log(dbPassword);
//         }else{
//             console.log("correct password")
//         }
//     })
// }


//LOGIN USERS WITHOUT HASHING
exports.loginUser = async (req, res) => {
    const project = await usersignup.findOne({ 
        where: { 
            email: req.body.email,
            password: req.body.password
        }
     });

    if (project === null) {
      res.send(project);
    } else {
      console.log(project instanceof usersignup); // true
      console.log(project.email); // 'My Title'
      res.send(project);
    }
}