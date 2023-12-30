const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'seu-host-do-banco-de-dados',
  user: 'seu-usuario-do-banco-de-dados',
  password: 'sua-senha-do-banco-de-dados',
  database: 'seu-nome-do-banco-de-dados'
});

db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
  } else {
    console.log('Conectado ao banco de dados MySQL');
  }
});

app.get('/resultados', (req, res) => {
  // Obter resultados da enquete
  db.query('SELECT opcao, COUNT(*) as quantidade FROM votos GROUP BY opcao', (err, results) => {
    if (err) {
      console.error('Erro ao obter resultados do banco de dados:', err);
      res.status(500).send('Erro interno do servidor');
    } else {
      const resultados = {};
      results.forEach((row) => {
        resultados[row.opcao] = row.quantidade;
      });
      res.json(resultados);
    }
  });
});

app.post('/votar', (req, res) => {
  // Adicionar novo voto
  const { opcao } = req.body;
  db.query('INSERT INTO votos (opcao) VALUES (?)', [opcao], (err) => {
    if (err) {
      console.error('Erro ao adicionar voto ao banco de dados:', err);
      res.status(500).send('Erro interno do servidor');
    } else {
      res.status(200).send('Voto adicionado com sucesso');
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor está ouvindo na porta ${port}`);
});
