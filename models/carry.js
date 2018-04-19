var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var Schema = mongoose.Schema;

var rolesValidos = {
    values: ['ADMIN_ROLE', 'USER_ROLE', 'DRIVER_ROLE'],
    message: '{VALUE} no es un rol permitido'
};

var carrySchema = new Schema({

    Descripcion: { type: String, require: false },
    peso: { type: Number, require: false },
    alto: { type: Number, require: false },
    largo: { type: Number, require: false },
    ancho: { type: Number, require: false },
    persona: { type: Boolean, require: false },
    cantidad: { type: Number, require: true },
    destino_ref: { type: Schema.Types.ObjectId, ref: 'Destino', required: [true, 'El destino es necesario'] },
    usuario_ref: { type: Schema.Types.ObjectId, ref: 'Usuario', required: [true, 'El usuario es necesario'] }


});

module.exports = mongoose.model('Carry', carrySchema);