const express = require('express');
require('dotenv').config();
const app = express();
const cors = require('cors');
const sequelize = require('./connections/database');
const mainPageRouter = require('./routes/mainroute');
const addUser = require('./routes/add-user');
// const signuppage = require('./routes/mainroute')
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
// app.use(signuppage)
app.use(mainPageRouter)
app.use('/add-user', addUser);
sequelize.sync()
    .then(() => {
        app.listen(5000, () => {
            console.log("server Is started on port 5000");
        })
    })
    .catch(err => {
        console.log(err);
    });