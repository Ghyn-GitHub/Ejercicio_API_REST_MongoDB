require('dotenv').config();

const app = require('./app');
const connectDB = require('./config/db_mongo');

const PORT = process.env.PORT || 3000;

// Iniciar servidor
const startServer = async () => {
    try {
        await connectDB();

        app.listen(PORT, () => {
            console.log(`Servidor funcionando en el puerto ${PORT}`);
        });

    } catch (error) {
        console.error("Error al iniciar el servidor:", error);
        process.exit(1);
    }
};

startServer();