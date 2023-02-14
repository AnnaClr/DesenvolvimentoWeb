const { Router } = require('express')
const router = Router()

router.get("/contact", (req, res) => {
    res.send('Contato')
})

router.get("/", (req, res) => {
    res.send('Class 02 - Routes Home')
})

router.get("/users", (req, res) => {
    res.send("Users")
})

module.exports = router