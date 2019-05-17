const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    Nombre: String,
    Apellido: String,
    Edad: Number,
    Telefono: Number
});

module.exports = mongoose.model('User', UserSchema);