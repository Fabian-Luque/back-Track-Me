var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var Schema = mongoose.Schema;


var direccionSchema = new Schema({

    pais: { type: String, require: [true, 'El pais es necesario'] },
    region: { type: String, require: [true, 'La region es necesaria'] },
    ciudad: { type: String, require: [true, 'la ciudad es necesaria'] },
    comuna: { type: String, require: [true, 'La comuna es necesaria'] },
    calle: { type: String, require: [true, 'La calle es necesaria'] },
    casa: { type: Number, require: false },
    departamento: { type: Number, require: false }
});

module.exports = mongoose.model('Direccion', direccionSchema);