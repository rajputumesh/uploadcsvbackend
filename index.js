const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.set('view engine','ejs');

const port = process.env.PORT || 5000;
let web = require('./Route/web');
let api = require('./Route/api');

app.use('/',web);
app.use('/api',api);

app.listen(port);