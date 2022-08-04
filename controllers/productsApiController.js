const Product = require('../models/products'); 


const getProducts = async (req, res) => {
    if (req.params.id) { 
        try {
            let product =  await Product.findOne({id:req.params.id},'title price id -_id')
            
            res.status(200).json(product);
        }
        catch (error) {
            console.log(`ERROR: ${error.stack}`)
            res.status(404).json({"message": "producto no encontrado"});
        }
    } else { 
        try {
            let products =  await Product.find({}, '-_id -__v')
            .populate('provider', 'company_name cif address -_id') //selector en singular de la coleccion que quieres relacionar,
            //luego la/s clave/s que quieres que traiga
            res.status(200).json({products});
        }
        catch (error) {
            console.log(`ERROR: ${error.stack}`)
            let products = []
            res.status(404).json(error);
        }
    }
}
const createProduct = async (req, res) => {
    console.log("Esto es el consol.log de lo que introducimos por postman",req.body); 
    const newProduct = req.body; 
    try{
        let product = new Product(newProduct); 
        let answer = await product.save(); 
        console.log("Este es el console.log de lo que devuelve la api",answer);
        res.status(201).json({"message":`Producto ${answer.title} guardado en el sistema con ID: ${answer.id}`});
    
    }catch(error){
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({"message":`Error guardando producto ${answer.title} `});
    }
}
const deleteProduct = async (req,res)=>{
    const msj ="Has enviado un DELETE para borrar product";
    console.log(msj);
    res.json({"message":msj});
}
module.exports = {
    getProducts,
    createProduct,
    deleteProduct
    //editProduct,
    
}

