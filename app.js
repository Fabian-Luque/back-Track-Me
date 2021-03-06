// Requires
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// Inicializar variables

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



//Importacion de rutas
var appRoutes = require('./routes/app');
var usuarioRoutes = require('./routes/usuario');

// Conexión a la base de datos
mongoose.connection.openUri('mongodb://localhost:27017/trackMe', (err, res) => {

    if (err) throw err;

    console.log('Base de datos: \x1b[32m%s\x1b[0m', 'Conectada');


});

app.use('/usuario', usuarioRoutes);
app.use('/', appRoutes);


//Escuchar peticiones
app.listen(3000, () => {
    console.log('Express server corriendo en el puerto 3000: \x1b[32m%s\x1b[0m', 'online');
});