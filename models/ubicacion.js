var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var Schema = mongoose.Schema;


var ubicacionSchema = new Schema({

    coord_x: { type: Number, require: [true, 'La coordenada x es necesario'] },
    coord_y: { type: Number, require: [true, 'La coordenada y es necesario'] },

});

module.exports = mongoose.model('Ubicacion', ubicacionSchema);