'use strict'

var mongoose = require('mongoose')
var app = require('./app')
var port = 4440

mongoose
    .connect('mongodb://localhost:27017/portafolio',{ useNewUrlParser: true })
    .then(() => {
        console.log('conexion exitosamente!')

        // creacion del servidor
        app.listen(port, ()=>{
            console.log('Servidor corriendo en el puerto: 4440')
        })
    })
    .catch((err) => console.log(err))

    
