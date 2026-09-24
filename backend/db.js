const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'biblioteca'
});

connection.connect((erro) => {
    if (erro){
        console.log('Erro ao conectar com o banco de dados!', erro);
        return;
    }
    console.log('Banco de dados biblioteca conectado!');
});

module.exports = connection;