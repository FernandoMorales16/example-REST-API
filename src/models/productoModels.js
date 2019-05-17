const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    nombreProducto: String,
    Precio: Number,
    Marca: String
});

module.exports = mongoose.model('Product', productSchema);