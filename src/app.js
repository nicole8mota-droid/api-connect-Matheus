const express = require('express');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(express.json());

app.use(userRoutes);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor funcionando na porta ${PORT}`);
});
