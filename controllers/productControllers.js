const product = require('../models/product').model;
const category = require('../models/category').model;

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

