var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var Schema = mongoose.Schema;

var tiposValidos = {
    values: ['CITY_CAR', 'CAMIONETA', 'CAMION', 'AUTOMOVIL'],
    message: '{VALUE} no es un tipo disponible'
};

var movilSchema = new Schema({

    patente: { type: String, require: [true, 'La patente es necesaria'] },
    modelo: { type: String, require: [true, 'El modelo es necesario'] },
    año: { type: Number, require: [true, 'El año es necesario'] },
    color: { type: String, require: false },
    tipo: { type: String, require: [true, 'El tipo es necesario'], default: 'AUTOMOVIL', enum: rolesValidos },
    img: { type: String, require: false },
    user_ref: { type: Schema.Types.ObjectId, ref: 'Usuario', required: [true, 'El usuario es requerido'] },
    ubicacion_ref: { type: Schema.Types.ObjectId, ref: 'Ubicacion', required: false }

});

module.exports = mongoose.model('Movil', movilSchema);