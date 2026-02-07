const express = require('express');
const routes = require('./routes'); // importa as rotas que criei acima
const cors = require('cors');
const mongoose = require('mongoose');

mongoose.connect('')
  .then(() => console.log("Conectado ao MongoDB!"))
  .catch((err) => console.error("Erro ao conectar:", err));

const app = express();
app.use(express.json());

app.use(routes);

app.use(cors());

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000 ');
});