const { Router } = require('express')
const router = Router()
const userControllers = require('../controllers/users.js')

router.get('/user', userControllers.read)
router.post('/user', userControllers.create)
router.put('/user/:ID', userControllers.update)
router.delete('/user/:ID', userControllers.delete)

module.exports = router