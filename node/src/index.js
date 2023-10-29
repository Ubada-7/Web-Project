const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const mongoose = require("mongoose");
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

var CONFIG = require('./config');
dotenv.config();

// defining the Express app
const app = express();

//CONNECT TO DB
mongoose 
    .connect(process.env.MONGO_DEV_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true  
    })   
    .then(() => console.log("Database connected!"))
    .catch(err => {
        console.log('going to display connection error ')
        console.log(err)
    });

app.set( 'port', ( process.env.PORT || 3000 ));

app.all('/*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", CONFIG.ALLOW_DOMAIN);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH');
    res.header("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, auth-token");
    res.header("Access-Control-Allow-Credentials", true);
    next();
});

// Configuring body parser middleware
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// adding Helmet to enhance your Rest API's security
app.use(helmet());
// enabling CORS for all requests
app.use(cors());
// adding morgan to log HTTP requests
app.use(morgan('combined'));

app.use(express.json());

// defining an endpoint to return all ads
const userRoutes = require('./routes/userRoutes');
app.use('/api/user', userRoutes);

const companyRoutes = require('./routes/companyRoutes');
app.use('/api/company', companyRoutes);

const productRoutes = require('./routes/productRoutes');
app.use('/api/product', productRoutes);

const saleRoutes = require('./routes/saleRoutes');
app.use('/api/sale', saleRoutes);

const chartRoutes = require('./routes/chartRoutes');
app.use('/api/chart', chartRoutes);

const stockRoutes = require('./routes/stockRoutes');
app.use('/api/stock', stockRoutes);

// starting the server
app.listen( app.get( 'port' ), function() {
    console.log( 'Node server is running on port ' + app.get( 'port' ));
});