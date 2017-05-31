var express = require('express'),
    pug = require('pug'),
    path = require('path');

var app = express();

app.set('view engine', 'pug');
app.set('views', __dirname+'/views');
app.use(express.static(path.join(__dirname+'/public')));

