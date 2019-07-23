const mysql = require('mysql');
const pool = mysql.createPool({
       
        host: "localhost",
        user: "totaliza",
        password: "Db_3l31c03s!",
        database: "totaliza",
        dateStrings:true,
});

process.on('SIGINT', () => 
    pool.end(err => {
        if(err) return console.log(err);
        process.exit(0);
    })
); 

module.exports = pool;