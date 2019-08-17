const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'Thomas',
    password: 'erwq',
    database: 'top_songs_db'
});

connection.connect(err => {
    if (err) throw err;
    
})