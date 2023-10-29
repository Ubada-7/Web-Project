
const router = require('express').Router();
const verify = require('../verifyToken');
const { ProductValidation } = require('../validation');
const Product = require('../models/Product');

router.get('/all', verify, async (req, res) => {
    const products = await Product.find();
    if(!products) return res.status(400).send('Something went wrong!');

    try {
        res.status(200).send(products);
    } catch(error) {
        res.status(400).send(error);
    }
});

router.post('/add', verify, async (req, res) => {
    const { error } = ProductValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    const product_exist = await Product.findOne({ 
        company_name: req.body.company_name,
        product_name: req.body.product_name,
        variant: req.body.variant,
        size: req.body.size,
    });
    if(product_exist) return res.status(400).send('Product already exist, please add new product');

    const product = new Product({
        type: req.body.type,
        company_name: req.body.company_name,
        product_name: req.body.product_name,
        variant: req.body.variant,
        size: req.body.size
    });

    try {
        const savedProduct = await product.save();
        res.status(200).send(savedProduct);
    } catch(error) {
        res.status(400).send(error);
    }
});

router.delete('/:id', verify, async (req, res) => {
    const productExists = await Product.findOne({_id: req.params.id});
    if(!productExists) return res.status(404).send("Product not found");

    try {
        await Class.deleteOne({_id: req.params.id});
        res.status(200).send("Product record is deleted");
    } catch(error) {
        res.status(400).send(error);
    }
});

module.exports = router;