const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const multer = require('multer');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

require('dotenv').config();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};

const db = mysql.createConnection({
  host: dbConfig.host,
  user: dbConfig.user,
  password: dbConfig.password,
  database: dbConfig.database
});

db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
  } else {
    console.log('Conectado ao banco de dados MySQL');
  }
});

app.use(express.json())

// U S U Á R I O //
app.post('/cadastro', upload.single('foto'), (req, res) => {
  const {
    nome,
    email,
    telefone,
    participou_anteriormente,
    anos_participacao_anteriores,
    trabalhar_no_bloco,
  } = req.body;

  const fotoPath = req.file ? req.file.path : null;

  db.query(
    'INSERT INTO usuarios (nome, email, telefone, participou_anteriormente, anos_participacao_anteriores, trabalhar_no_bloco, foto_path) VALUES (?, ?, ?, ?, ?, ?, ?)',
    [nome, email, telefone, participou_anteriormente, anos_participacao_anteriores, trabalhar_no_bloco, fotoPath],
    (err, results) => {
      if (err) {
        console.error(err);
        res.status(500).send('Erro no servidor');
      } else {
        res.send('Cadastro realizado com sucesso!');
      }
    }
  );
  
});

// E N Q U E T E //
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
