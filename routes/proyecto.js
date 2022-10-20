'use strict'

var express = require('express')
var ProyectoController = require('../controllers/proyecto')

var router = express.Router()

router.get('/home', ProyectoController.home)
// :id? => el ? significa que es opcional
router.get('/proyecto/:id?', ProyectoController.getProyectos)
router.get('/proyectos', ProyectoController.getListProyecto)

router.post('/test', ProyectoController.test)
router.post('/save-proyecto', ProyectoController.saveProyecto)

router.put('/proyecto_to_update/:id', ProyectoController.updateProyecto)

router.delete('/proyecto_to_delete/:id', ProyectoController.deleteProyecto)

module.exports = router
