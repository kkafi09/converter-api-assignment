require('dotenv').config();
const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser');

const geometryRoutes = require('./routes/geometry')
const suhuRoutes = require('./routes/suhu')
const convertRoutes = require('./routes/convert')
const bmiRoutes = require('./routes/bmi')
const bilanganRoutes = require('./routes/bilangan')

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Nomor 1
app.use('/geometry', geometryRoutes)

// Nomor 2
app.use('/suhu', suhuRoutes);

// Nomor 3
app.use('/convert', convertRoutes);

// Nomor 4
app.use('/bmi', bmiRoutes);

// Nomor 5
app.use('/bilangan', bilanganRoutes);

app.listen(port, () => {
    console.log("Listen at port " + port);
});
