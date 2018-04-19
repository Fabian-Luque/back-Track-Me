var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var Schema = mongoose.Schema;

var rolesValidos = {
    values: ['ADMIN_ROLE', 'USER_ROLE', 'DRIVER_ROLE'],
    message: '{VALUE} no es un rol permitido'
};

var usuarioSchema = new Schema({

    nombre: { type: String, require: [true, 'El nombre es necesario'] },
    rut: { type: String, require: [true, 'El rut es necesario'] },
    email: { type: String, require: [true, 'El mail es necesario'] },
    edad: { type: Number, require: [true, 'La edad es necesaria'] },
    sexo: { type: Boolean, require: [true, 'El sexo es necesario'] },
    img: { type: String, require: false },
    role: { type: String, require: true, default: 'USER_ROLE', enum: rolesValidos },
    //direccion_ref: { type: Schema.Types.ObjectId, ref: 'Direccion', required: [true, 'La direccion es requerida'] }

});

module.exports = mongoose.model('Usuario', usuarioSchema);