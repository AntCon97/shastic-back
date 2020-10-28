const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/db');
var cors = require('cors');

dotenv.config({ path: './config/config.env'});

const contact = require('./routes/contact')


connectDB();

const app = express();

app.use(express.json())
app.use(cors())

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

app.use('/api/v1/contacts', contact);


const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));

process.on('unhandledRejection', (err, promise)=> {
    console.log(`Error: ${err.message}`);

    server.close(() => process.exit(1));
})