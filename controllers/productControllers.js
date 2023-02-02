const product = require('../models/product').model;

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
    console.log(req.params.id);
}
