//conexion Basica
const mysql=require('mysql2')
console.time('Basic Connection');
const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'bd_usuarios'
})

// conectar a la base de datos
connection.connect((err)=>{
    if(err) throw err;
    console.log('Conectado a la Base de Datos')
    connection.query('INSERT INTO usuario (nombre,correo) VALUES(?,?)',['Pedro Perez','pedrip@gmail.com'],(err,results,fields)=>{
        if(err) throw err;
        console.log(results);
        console.timeEnd('Basic Connection');
        connection.end();
    })
});
