const mysql = require('mysql');
//importamos la configuracion para conectarnos a la BDD deseada
const {database} = require('./keys')
const{promisify} = require('util')

const pool = mysql.createPool(database)

// creamos y ejecutamos la conexión con la BDD
pool.getConnection((err, connection) => {
    //puede tener dos tipos de respuestas: error y connection
    if (err) {
        if(err.code === 'PROTOCOL_CONNECTION_LOST'){
            console.error('Database connection was closed')
        }
        if(err.code === 'ER_CON_COUNT_ERROR'){
            console.error ('Database has to many connections')  
        }
        if(err.code === 'ECONNREFUSED'){
            console.error('Database connection was refused')
        }
    }
    if (connection) connection.release()
    console.log('DB is Connected');
    return;
})
//cada vez que se haga una consulta a esa BDD, la podemos llamar con promesas o async await
//promisify pool querys (consultas)
pool.query = promisify(pool.query)
// Y lo exportamos para utilizarlo desde cualquier punto de la app
module.exports = pool