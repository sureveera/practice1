const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminData = require('./routes/adminRoute');
const shopRoutes = require('./routes/shopRoute');

app.set('view engine', 'pug')

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData);
app.use(shopRoutes);

app.use((req, res, next) => {
    //res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
    res.render('404', {title: 'Error'})
});

app.listen(3000);
