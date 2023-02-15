const {Router} = require('express')
const router = Router()

router.get('/', (req, res) => {
    res.send('Class 03 - Params')
})

// Route Params
router.get('/user/:id/:name', (req, res) => {
    const {id, name} = req.params
    res.send(`User ${id} Nome: ${name}`)
})

// Query Params
router.get('/user', (req, res) => {
    const {id, name} = req.query
    res.send(`User ${id} Nome: ${name}`)
})

// Body Params
router.post('/user', (req, res) => {
    const {id, name} = req.body
    // res.send(`User ${id} Nome: ${name}`)
    res.json({id, name})
})

module.exports = router