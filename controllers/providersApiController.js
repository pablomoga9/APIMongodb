const Provider = require('../models/providers');

const getProviders = async (req, res) => {
  
        try {
            let providers = await Provider.find({},'-_id -__v').sort('-id'); //[]
            res.status(200).json({providers});
        }
        catch (error) {
            console.log(`ERROR: ${error.stack}`);
            res.status(404).json({"message":"providers no encontrados"});
        }
    
}

const createProviders = async (req, res) => {
    console.log("Esto es el consol.log de lo que introducimos por postman",req.body); // Objeto recibido de producto nuevo
    const newProvider = req.body; // {} nuevo producto a guardar
    
    try{
        let product = new Provider(newProvider); // Crear el objeto Product con los datos del producto
        let answer = await product.save(); // Guardar objeto en MongoDB
        console.log("Este es el console.log de lo que devuelve la api",answer);
        res.status(201).json({"message":`Producto ${answer.title} guardado en el sistema con ID: ${answer.id}`});
    
    }catch(error){
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({"message":`Error guardando producto ${answer.title} `});
    }
}

module.exports = {
    getProviders,
    createProviders
}