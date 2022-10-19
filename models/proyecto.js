'use strict'

var mongoose = require('mongoose')
var Schema = mongoose.Schema

// molde de nuestra base de datos
var ProyectoSchema = Schema({
    name : String,
    description :String,
    author : String,
    langs : [String],
    year : Number,
})

/* "name" : "Blog",
    "description" : "Personal Blog",
    "author" : "CatellaTech",
    "langs" : [
        "Js",
        "angular",
        "css"
    ],
    "year" : "2022" */

module.exports = mongoose.model('Proyecto', ProyectoSchema)
// guarda los documents en la coleccion