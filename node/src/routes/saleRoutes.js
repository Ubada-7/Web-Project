
const router = require('express').Router();
const verify = require('../verifyToken');
const { SaleValidation } = require('../validation');
const Sale = require('../models/Sale');

router.get('/all', verify, async (req, res) => {
    const sales = await Sale.find();
    if(!sales) return res.status(400).send('Something went wrong!');

    try {
        res.status(200).send(sales);
    } catch(error) {
        res.status(400).send(error);
    }
});

router.post('/add', verify, async (req, res) => {
    for(let i=0; i<req.body.length; i++) {
        const { error } = SaleValidation(req.body[i]); 
        if(error) return res.status(400).send(error.details[0].message);
    }
    
    const sale = new Sale({
        sales: req.body
    });

    try {
        const savedSale = await sale.save();
        res.status(200).send(savedSale);
    } catch(error) {
        res.status(400).send(error);
    }
});

// router.delete('/:id', verify, async (req, res) => {
//     const productExists = await Product.findOne({_id: req.params.id});
//     if(!productExists) return res.status(404).send("Product not found");

//     try {
//         await Class.deleteOne({_id: req.params.id});
//         res.status(200).send("Product record is deleted");
//     } catch(error) {
//         res.status(400).send(error);
//     }
// });

module.exports = router;