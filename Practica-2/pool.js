//Coneccion Pool
const mysql=require('mysql2')
console.time('Pool Connection')
const pool=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'',
    database:'bd_usuarios',
    waitForConnections:true,
    connectionLimit:10,
    queueLimit:0
});
//Consulta a la base de datos
pool.query('INSERT INTO usuario (nombre,correo) VALUES(?,?)',['Juan Velez','Jvelez@gmail.com'],(err,results,fields)=>{
    if(err) throw err;
    console.log('Nuevo registro insertado el ID es: ',results.insertId);
    console.timeEnd('Pool Connection');
});
