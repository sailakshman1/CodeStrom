require('dotenv').config()
const express = require('express');
const app = express();
const path = require("path")
const user = require('./routes/user.route')
const moongodb = require("mongoose");
const adminn = require('./routes/admin.route')
const port = 8080;
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, "../frontend")))
moongodb.connect(process.env.DBSTRING)
    .then(() => {
        console.log("DataBAse connectd!")
    }).catch(err => {
        console.log(err.message)
    })
app.use('', user)
app.use('', adminn)
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
