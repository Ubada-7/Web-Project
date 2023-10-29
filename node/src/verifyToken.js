const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1]; // Authorization: 'Bearer TOKEN'
        if (!token) {
            throw new Error('Authentication failed!');
        }
        const verified = jwt.verify(token, process.env.TOKEN_SECERET);
        req = verified;  
        next();
    } catch (err) {
        res.status(401).send('Invalid token !');
    }
};