var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var Schema = mongoose.Schema;

var destinoSchema = new Schema({

    coord_x: { type: Number, require: [true, 'La coordenada x es necesario'] },
    coord_y: { type: Number, require: [true, 'La coordenada y es necesario'] },
    descripcion: { type: String, require: false },
    direccion_ref: { type: Schema.Types.ObjectId, ref: 'Direccion', required: [true, 'La direccion es requerida'] }

});

module.exports = mongoose.model('Destino', destinoSchema);