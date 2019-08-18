const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'Thomas',
    password: 'erwq',
    database: 'bamazon'
});
const inquirer = require('inquirer');

connection.connect(err => {
    if (err) throw err;
    connection.query('SELECT * FROM products', (err, products) => {
        if (err) throw err;
        for (let i = 0; i < products.length; ++i) {
            for (item in products[i])
                console.log(item + ': ' + products[i][item]);
            console.log();
        }
        inquirer.prompt([{
            type: 'number',
            message: 'Product ID:',
            name: 'id'
        }, {
            type: 'number',
            message: 'Quantity: ',
            name: 'quantity'
        }]).then(answers => {
            let product = products.find(e => e.id == answers.id);
            if (product.stock >= answers.quantity)
                connection.query('UPDATE products SET stock = ? WHERE id = ?', [
                    product.stock - answers.quantity,
                    product.id
                ], err => {
                    if (err) throw err;
                    console.log('Total cost: ' + product.price * answers.quantity + ' Brapples')
                    connection.end(err => { if (err) throw err; });
                });
            else {
                console.log('Out of stock.');
                connection.end(err => { if (err) throw err; });
            }
        });
    });
});