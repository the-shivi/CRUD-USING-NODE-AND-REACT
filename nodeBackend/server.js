var express = require('express');
var bodyparser = require('body-parser');
var cors = require('cors');

var app = express(); // rest object created here from express module

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
app.use(cors());

var fetch = require('./fetch');
app.use('/fetch',fetch)

var insert = require('./insert');
app.use('/insert',insert);

var update = require('./update');
app.use('/update',update);

var remove = require('./delete')
app.use('/delete',remove);


app.listen(8080);
console.log('Server listening on port 8080');

