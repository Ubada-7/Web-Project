
const router = require('express').Router();
const verify = require('../verifyToken');
const { SaleValidation } = require('../validation');
const Sale = require('../models/Sale');

router.get('/:company_name', verify, async (req, res) => {
    const sales = await Sale.find();
    let data = [];
    for(let i=0; i<sales.length; i++) {
        let quantity = 0;
        let sale_date;
        for(let x=0; x<sales[i].sales.length; x++) {
            quantity = quantity + sales[i].sales[x].quantity;
            sale_date = sales[i].sales[x].date;
        }
        data.push({
            label: sale_date,
            quantity: quantity
        })
    }

    try {
        res.status(200).send(data);
    } catch(error) {
        res.status(400).send(error);
    }
});

router.get('/range/:range', verify, async (req, res) => {
    console.log(req.params.range)
    console.log(req.params.range.split(" "))
    let value = req.params.range.split(" ");
    const sales = await Sale.find();
    let data = [];
    for(let i=0; i<sales.length; i++) {
        let quantity = 0;
        let sale_date;
        for(let x=0; x<sales[i].sales.length; x++) {
            quantity = quantity + sales[i].sales[x].quantity;
            sale_date = sales[i].sales[x].date;
        }
        data.push({
            label: sale_date,
            quantity: quantity
        })
    }

    // try {
    //     res.status(200).send(data);
    // } catch(error) {
    //     res.status(400).send(error);
    // }
});

module.exports = router;