const mongoose = require('mongoose');

const objectSchema = {
    company_name: { 
        type: String, 
        required: true 
    },
    cif: { 
        type: String, 
        required: true 
    },
    address: { 
        type: String, 
        required: true 
    },
    url_web:{
        type: String,
        required: true
       }
   
};

const providerSchema = mongoose.Schema(objectSchema);
// Crear el modelo --> Colección
const Provider = mongoose.model('Provider', providerSchema);

module.exports = Provider;