const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');
const connection = require('./db');

const server = express();
server.use(cors());
server.use(express.json());


// Rotas do Livro

server.get('/livros', (req, res) => {
    const sql = 'SELECT * FROM Livro';

    connection.query(sql, (erro, resultado) => {
        if (erro){
            return res.status(500).json({ erro: erro.message });
        }
        return res.json(resultado);
    });
});

server.get('/livros/ordenados', (req, res) => {

    const sql = 'SELECT * FROM Livro ORDER BY titulo DESC';

     connection.query(sql, (erro, resultado) => {
        if (erro){
            return res.status(500).json({ erro: erro.message });
        }
        return res.json(resultado);
    });
});  

server.get('/livros/:id', (req, res) => {
    const { id } = req.params;

    const sql = 'SELECT * FROM Livro WHERE id = ?';
    
    connection.query(sql, [id], (erro, resultado) => {
        if (erro){
            return res.status(500).json({ erro: erro.message });
        }
        return res.json(resultado);
    });

});

server.get('/livros/busca/:titulo', (req, res) => {

    const sql = 'SELECT * FROM Livro WHERE titulo LIKE ?';

    const TermoBusca = '%' + req.params.titulo + '%';

    connection.query(sql, [TermoBusca], (erro, resultado) => {
        if (erro){
            return res.status(500).json({ erro: erro.message });
        }
        return res.json(resultado);
    });

});

server.post('/livros', (req, res) => {
    const { titulo, autor, isbn, ano_publicado, categoria, quantidade } = req.body;
    
    if (isbn == null || ano_publicado == null || categoria == null

    ){
        return res.status(400).json({ erro: 'Todos os campos são obrigatorios! '})
    }

    const sql = `INSERT INTO Livro
    (titulo, autor, isbn, ano_publicado, categoria, quantidade) VALUES (?, ?, ?, ? , ? ,?)`

    connection.query(sql, [titulo, autor, isbn, ano_publicado, categoria, quantidade], (erro, resultado) => {
        if (erro){
            return res.status(500).json({ erro: erro.message });
        }
        res.json({
            message: 'Livro cadastrado com sucesso',
            id: resultado.insertId
        });
    });

});

server.put('/livros/:id', (req, res) =>{
    const { titulo, autor, isbn, ano_publicado, categoria, quantidade } = req.body;

    const { id } = req.params;

    const sql = `UPDATE Livro SET titulo = ?, autor = ?, isbn = ?, ano_publicado = ?, categoria = ?, quantidade = ? WHERE id = ?`;

    connection.query(sql, [titulo, autor, isbn, ano_publicado, categoria, quantidade, id], (erro, resultado) => {
        if (erro){
            return res.status(500).json({ erro: erro.message });
        }
        res.json({ mensagem: 'Livro atualizado com sucesso'})

    });
});  

server.delete('/livros/:id', (req, res) => {
    const { id } = req.params;

    const sql = 'DELETE FROM Livro WHERE id = ?';
    
    connection.query(sql, [id], (erro, resultado) => {
        if (erro){
            return res.status(500).json({ erro: erro.message });
        }
        res.json({ mensagem: 'Livro excluido com sucesso'})

    });
});  

// Rotas do Usuario

server.get('/usuarios', (req, res) => {
    const sql = 'SELECT * FROM Usuario';

    connection.query(sql, (erro, resultado) => {
        if (erro){
            return res.status(500).json({ erro: erro.message });
        }
        return res.json(resultado);
    });
});

server.get('/usuarios/:id', (req, res) => {
    const { id } = req.params;

    const sql = 'SELECT * FROM Usuario WHERE id = ?';
    
    connection.query(sql, [id], (erro, resultado) => {
        if (erro){
            return res.status(500).json({ erro: erro.message });
        }
        return res.json(resultado);
    });

});

server.post('/usuarios', (req, res) => {
    const { nome, cpf, email, telefone } = req.body;
    
    if (telefone == null

    ){
        return res.status(400).json({ erro: 'Todos os campos são obrigatorios! '})
    }

    const sql = `INSERT INTO Usuario
    (nome, cpf, email, telefone) VALUES (?, ?, ?, ?)`

    connection.query(sql, [nome, cpf, email, telefone], (erro, resultado) => {
        if (erro){
            return res.status(500).json({ erro: erro.message });
        }
        res.json({
            message: 'Usuario cadastrado com sucesso',
            id: resultado.insertId
        });
    });

});

server.put('/usuarios/:id', (req, res) =>{
    const { nome, cpf, email, telefone } = req.body;

    const { id } = req.params;

    const sql = `UPDATE Usuario SET nome = ?, cpf = ?, email = ?, telefone = ? WHERE id = ?`;

    connection.query(sql, [nome, cpf, email, telefone, id], (erro, resultado) => {
        if (erro){
            return res.status(500).json({ erro: erro.message });
        }
        res.json({ mensagem: 'Usuario atualizado com sucesso'})

    });
});  

server.delete('/usuarios/:id', (req, res) => {
    const { id } = req.params;

    const sql = 'DELETE FROM Usuario WHERE id = ?';
    
    connection.query(sql, [id], (erro, resultado) => {
        if (erro){
            return res.status(500).json({ erro: erro.message });
        }
        res.json({ mensagem: 'Usuario excluido com sucesso'})

    });
});  

// Rotas de Emprestimo

server.get('/emprestimos', (req, res) => {
    const sql = 'SELECT * FROM Emprestimo';

    connection.query(sql, (erro, resultado) => {
        if (erro){
            return res.status(500).json({ erro: erro.message });
        }
        return res.json(resultado);
    });
});

server.get('/emprestimos/:id', (req, res) => {
    const { id } = req.params;

    const sql = 'SELECT * FROM Emprestimo WHERE id_usuario = ?';
    
    connection.query(sql, [id], (erro, resultado) => {
        if (erro){
            return res.status(500).json({ erro: erro.message });
        }
        return res.json(resultado);
    });

});

server.post('/emprestimos', (req, res) => {
    const { id_livro, id_usuario, data_emprestimo, data_prevista_devolucao, data_devolucao, status } = req.body;
    
    if (data_devolucao == null

    ){
        return res.status(400).json({ erro: 'Todos os campos são obrigatorios! '});
    }

    const sql = `INSERT INTO Emprestimo
    (id_livro, id_usuario, data_emprestimo, data_prevista_devolucao, data_devolucao, status) VALUES (?, ?, ?, ?, ?, ?)`

    connection.query(sql, [id_livro, id_usuario, data_emprestimo, data_prevista_devolucao, data_devolucao, status], (erro, resultado) => {
        if (erro){
            return res.status(500).json({ erro: erro.message });
        }
        res.json({
            message: 'Emprestimo cadastrado com sucesso',
            id: resultado.insertId
        });
    });

});

server.put('/emprestimos/:id', (req, res) =>{
    const { data_emprestimo, data_prevista_devolucao, data_devolucao, status } = req.body;

    const { id } = req.params;

    const sql = `UPDATE Emprestimo SET data_emprestimo = ?, data_prevista_devolucao = ?, data_devolucao = ?, status = ? WHERE id = ?`;

    connection.query(sql, [data_emprestimo, data_prevista_devolucao, data_devolucao, status, id], (erro, resultado) => {
        if (erro){
            return res.status(500).json({ erro: erro.message });
        }
        res.json({ mensagem: 'Emprestimo atualizado com sucesso'})

    });
});  

const PORT = 3030;

server.listen(PORT, () => {
    console.log(`Servidor rodando na porta: ${PORT}`);
});