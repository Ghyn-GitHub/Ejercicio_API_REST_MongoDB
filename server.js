require('dotenv').config();

const app = require('./app');
const mongoose = require('./config/db_mongo');

const PORT = process.env.PORT || 3000;

// Iniciar servidor
mongoose.connection.once('open', () => {
    app.listen(PORT, () => {
        console.log(`Servidor funcionando en http://localhost:${PORT}`);
    });
});
