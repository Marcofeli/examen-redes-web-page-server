const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// middlewares
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const routes = require('./routes/twitter.routes');

app.use('/twitter-messages', routes);

app.listen(3000, () => {
  console.log(`Server is listening on port 3000`);
});
