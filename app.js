const express = require('express');
const app = express();

const productsRoutes = require('./routes/products.routes');
const providersRoutes = require('./routes/providers.routes');

// Middlewares
app.use(express.json());

// Rutas
app.use('/api/products', productsRoutes);
app.use('/api/providers', providersRoutes);

// Exportamos la aplicación
module.exports = app;