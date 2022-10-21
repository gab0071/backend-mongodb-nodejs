'use strict'

var express = require('express')
var ProyectoController = require('../controllers/proyecto')

var router = express.Router()

/* 
middleware => El middleware en node. js es una función que tendrá todo el acceso para solicitar un objeto, responder a un objeto y pasar a la siguiente función de middleware en el ciclo de solicitud y respuesta de la aplicación.
*/ 

var multipart = require('connect-multiparty')
var multipartMiddleware = multipart({ uploadDir: './uploads'})

router.get('/home', ProyectoController.home)
// :id? => el ? significa que es opcional
router.get('/proyecto/:id?', ProyectoController.getProyectos)
router.get('/proyectos', ProyectoController.getListProyecto)

router.post('/test', ProyectoController.test)
router.post('/save-proyecto', ProyectoController.saveProyecto)
router.post('/image/:id',multipartMiddleware, ProyectoController.uploadImage)

router.put('/proyecto_to_update/:id', ProyectoController.updateProyecto)

router.delete('/proyecto_to_delete/:id', ProyectoController.deleteProyecto)

module.exports = router
