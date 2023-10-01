const express = require('express');

const setupServer = async() =>{
    const app = express();
    const PORT = 3000;
    app.listen(PORT, () =>{
    console.log(`Server started listening on ${PORT}`)
})
}

setupServer();