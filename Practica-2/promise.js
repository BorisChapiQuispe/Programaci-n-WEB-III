//coneccion con promesas
const mysql=require('mysql2/promise');
async function main(){
    try{
        console.time('Promise Conection')
        //conectando a la base de datos usando promesas 
        const connection =await mysql.createConnection({
            host:'localhost',
            user:'root',
            password:'',
            database:'bd_usuarios'
        })
        console.log('Conectado a la Base de Datos');
        //ejecutando una consulta usando promesas
        const [rows]=await connection.execute('INSERT INTO usuario (nombre,correo) VALUES(?,?)',['Andres ballesteros','andrewbay@gmail.com']);
        console.log('Nuevo registro insertado el ID es: ',rows.insertId);
        //cerrando coneccion
        await connection.end();
        console.timeEnd('Promise Conection');
    }catch(err){
        console.error('ERROR: ',err);
    }
}
main();
