const { Router } = require('express')
const router = Router()
const userControllers = require('../controllers/users.js')
const loginControllers = require('../controllers/auth.js')
const authMiddleware = require('../middrewares/auth.js')
const prisma = require('../databases')

router.get('/users', userControllers.read)
router.post('/users', userControllers.create)
router.put('/users/:ID', userControllers.update)
router.delete('/users/:ID', userControllers.delete)

router.post('/login', loginControllers.auth)
router.get('/system', authMiddleware, async (req, res) => {
    const id = req.userID
    const user = await prisma.users.findUnique({where: {ID: Number(id)}})
    res.json({
        system: true, 
        id,
        Email: user.Email,
        status: "Authorized"
    })
})

module.exports = router;