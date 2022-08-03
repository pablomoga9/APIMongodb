var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
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
        validate: {
            validator: function(url){
                if(url.indexOf('.com') != -1 || url.indexOf('.es') != -1 || url.indexOf('.org') != -1)
                    return true;
                else {
                    return false;
                }
            }, 
            message: "Solo se admiten url con '.com', '.es' o '.org'"
        }
    }
   
};

const providerSchema = mongoose.Schema(objectSchema);
// Crear el modelo --> Colección
const Provider = mongoose.model('Provider', providerSchema);

module.exports = Provider;