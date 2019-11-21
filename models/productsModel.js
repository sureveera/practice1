const fs = require('fs')

fs.readFileSync('./Products.json', (err, data) => {
    if(err) throw err
})

exports.addProduct = {path: 'addProduct', title:'Admin'}

exports.save = (data) => {
    let products = [];
    fs.readFile('./Products.JSON', (err, fileData) => {
        if (!err)
            products = JSON.parse(fileData)
    })
    products.push(JSON.stringify(data))
    fs.writeFile('./Products.JSON', JSON.stringify(products), (err) => {
        console.log(err)
    })
    console.log(products)
}

exports.fectchAll = (cb) => {
    fs.readFile('./Products.JSON', (err, fileData) => {
        if (err) {
            cb([])
        }
        cb(JSON.parse(fileData))
    })
}

