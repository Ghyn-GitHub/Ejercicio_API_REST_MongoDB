const mongoose = require('mongoose');

const objectSchema = {
    company_name: {
        type: String,
        required: true
    },
    CIF: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true
    },
    url_web: {
        type: String,
        required: true
    }
};

// Crear el esquema
const providerSchema = mongoose.Schema(objectSchema);

// Crear el modelo
const Provider = mongoose.model('Provider', providerSchema);

module.exports = Provider;
