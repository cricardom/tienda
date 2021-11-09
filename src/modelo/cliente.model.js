const mongoose = require('mongoose');
const { Schema } = mongoose;

const ClienteSchema = new Schema({
  nombre: {type: String, require: true},
  apellido: {type: String, require: true},
  correo: {type: String, require: true},
  telefono: {type: Number, require: true},
  direccion: {type: String, require: true}
})

module.exports = mongoose.model('Cliente', ClienteSchema);
