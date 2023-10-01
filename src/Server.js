const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT 

const setupServer = async() =>{
    const app = express();
    app.listen(PORT, () =>{
    console.log(`Server started listening on ${PORT}`);
})
}

setupServer();