const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
dotenv.config();

const PORT = process.env.PORT 

const setupServer = async() =>{
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.listen(PORT, () =>{
    console.log(`Server started listening on ${PORT}`);
});
}

setupServer();