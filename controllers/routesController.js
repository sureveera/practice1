const fs = require('fs')

const productsModel = require('../models/productsModel')

exports.getProduct = (req, res, next) => {
    //res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    res.render('add-product', productsModel.addProduct)
  }


exports.addProduct = (req, res, next) => {
    //products.push({ title: req.body.title, name: req.body.name, price: req.body.price });
    productsModel.save(req.body)
    res.redirect('/');
  }

exports.getShop = (req, res, next) => {
    //console.log('shop.js', adminData.products);
    productsModel.fectchAll((prods) => {
        res.render('shop', {products: prods, title: 'My Shop', path: '/', hasProducts: prods.length > 0})
    })
    //res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    
  }
