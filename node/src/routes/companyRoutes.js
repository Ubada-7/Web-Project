
const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const verify = require('../verifyToken');
const { CompanyValidation } = require('../validation');
const Company = require('../models/Company');

router.get('/all', verify, async (req, res) => {
    const companies = await Company.find();
    if(!companies) return res.status(400).send('Something went wrong!');

    try {
        res.status(200).send(companies);
    } catch(error) {
        res.status(400).send(error);
    }
});

router.post('/add', verify, async (req, res) => {
    const { error } = CompanyValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    const company_exist = await Company.findOne({name: req.body.name});
    if(company_exist) return res.status(400).send('Name already exist, please try with new one');

    const company = new Company({
        name: req.body.name,
        address: req.body.address,
        phone_number: req.body.phone_number
    });

    try {
        const savedCompany = await company.save();
        res.status(200).send(savedCompany);
    } catch(error) {
        res.status(400).send(error);
    }
});

module.exports = router;