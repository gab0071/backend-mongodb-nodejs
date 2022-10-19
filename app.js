'use strict'
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

// cargar archivos de rutas

// middlewares
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// cors

// rutas
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
})

// exportar
module.exports = app;

