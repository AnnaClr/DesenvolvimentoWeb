const { Router } = require('express')
const router = Router()
const controllers = require('../controllers')
router.get('/courses', controllers.read)
router.post('/courses', controllers.create)
router.put('/courses/:ID', controllers.update)
router.delete('/courses/:ID', controllers.delete)

module.exports = router
