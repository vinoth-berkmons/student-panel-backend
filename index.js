const express = require('express');

const loadConfig = require('./config');
const routes = require('./routes');


loadConfig();
const app = express();
const port = process.env.PORT;

//initializing the app routes
routes.initialize(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})