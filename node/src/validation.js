const Joi = require('joi');

const RegisterUserValidation = (data) => {
    const schema = {
        first_name: Joi.string().min(3).required(),
        last_name: Joi.string().min(3).required(),
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required(),
    }
    return Joi.object(schema).validate(data);
}

const LoginValidation = (data) => {
    const schema = {
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required(),
    }
    return Joi.object(schema).validate(data);
}

const CompanyValidation = (data) => {
    const schema = {
        name: Joi.string().min(3).required(),
        address: Joi.string().min(3).required(),
        phone_number: Joi.string().min(11).required(),
    }
    return Joi.object(schema).validate(data);
}

const ProductValidation = (data) => {
    const schema = {
        type: Joi.string().min(3).required(),
        company_name: Joi.string().min(3).required(),
        product_name: Joi.string().min(3).required(),
        variant: Joi.string().min(3).required(),
        size: Joi.string().min(3).required(),
    }
    return Joi.object(schema).validate(data);
}

const SaleValidation = (data) => {
    const schema = {
        company_name: Joi.string().required(),
        type: Joi.string().required(),
        size: Joi.string().required(),
        variant: Joi.string().required(),
        flavor: Joi.string().required(),
        price: Joi.number().required(),
        quantity: Joi.number().required()
    }
    return Joi.object(schema).validate(data);
}

const StockValidation = (data) => {
    const schema = {
        company_name: Joi.string().required(),
        type: Joi.string().required(),
        size: Joi.string().required(),
        variant: Joi.string().required(),
        flavor: Joi.string().required(),
        product_name: Joi.string().required(),
        quantity: Joi.number().required(),
        unit: Joi.number().required(),
        retail_price: Joi.number().required(),
        distribution_price: Joi.number().required(),
    }
    return Joi.object(schema).validate(data);
}

module.exports.RegisterUserValidation = RegisterUserValidation;
module.exports.LoginValidation = LoginValidation;
module.exports.CompanyValidation = CompanyValidation;
module.exports.ProductValidation = ProductValidation;
module.exports.SaleValidation = SaleValidation;
module.exports.StockValidation = StockValidation;
