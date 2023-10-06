const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require('./config/serverConfig');
const ApiRoutes = require('./routes/index');
const db = require('./models/index');
// const city = require('./models/city');

const setupServer = async () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use('/api', ApiRoutes);
  app.listen(PORT, async () => {
    console.log(`Server started listening on ${PORT}`);
    if(process.env.SYNC_DB){
       db.sequelize.sync({alter:true});
    }
   
 
  });
};

setupServer();
