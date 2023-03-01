const { Router } = require('express')
const router = Router()
const userControllers = require('../controllers/users.js')

router.get('/users', userControllers.read)
router.post('/users', userControllers.create)
router.put('/users/:ID', userControllers.update)
router.delete('/users/:ID', userControllers.delete)

const loginControllers = require('../controllers/auth.js')
router.post('/login', loginControllers.auth)

module.exports = router;