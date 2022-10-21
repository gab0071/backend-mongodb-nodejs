'use strict'
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

// cargar archivos de rutas
var proyecto_routes = require('./routes/proyecto')

// middlewares
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});



// rutas
app.use('/catellatech', proyecto_routes)



// -----------------------------------------------------------------------------------
/* rutas
app.get('/', (req,res)=>{
    res.status(200).send(
      "<h1>Pagina principal corriendo desde el backend baby</h1>"
    )
})

// /test/:id 
app.get('/test', (req,res)=>{
    // probando postman con el metodo POST
    console.log(req.body.nombre) // body
    console.log(req.query.apellido) // url 
    //console.log(req.params.id) // paramentros en la web

    res.status(200).send({
        msg: "hola mundo desde mi API"
    })
}) */



// exportar
module.exports = app;

