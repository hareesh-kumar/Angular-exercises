const express = require('express');
const bp = require("body-parser");
const route = require('./server/config/productroutes.js');

const app = express();

app.use(express.static(__dirname + '/exercises/dist/exercises'));
app.use(bp.json());

route.Routify(app);

app.listen(8000, () => console.log('Listening on 8000:'));