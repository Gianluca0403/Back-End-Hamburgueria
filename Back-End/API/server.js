const express = require('express');
const routes = require('./routes'); // importa as rotas que criei acima
const cors = require('cors');

const app = express();
app.use(express.json());

app.use(routes);

app.use(cors());

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000 ');
});