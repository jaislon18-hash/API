const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('SALVE! API is running.');
});

app.get('/api/dados', (req, res) => {
    res.json({ mensagem: 'Aqui estão seus dados!' });   
});

app.listen(port, () => {
    console.log(`SALVE! API listening at http://localhost:${port}`);
});

app.post('/api/dados', (req, res) => {
    const {nome, idade} = req.body;
    const query = 'INSERT INTO dados (nome, idade) VALUES (?, ?)';
    connection.query(query, [nome, idade], (err, results) => {
        if (err) {
            console.error('Erro ao inserir dado:', err.sqlMessage || err);
            res.status(500).json({ mensagem: 'Erro ao salvar dado.', erro: err.sqlMessage || err });
        } else {
            res.json({ mensagem: 'Dado salvo com sucesso!', id: results.insertId });
        }
    });
});



// conexão banco de dados
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Cafezinho@123',
  database: 'minha_api_db'
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
  }else{
    console.log('Conectado ao banco de dados MySQL!');
  }
});