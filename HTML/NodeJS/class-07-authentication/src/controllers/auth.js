const prisma = require('../databases')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {secret, expiresIn} = require('../configs/auth.json')

module.exports = {
    async auth(req, res) {
        const { Email, Password } = req.body
        if (!Email) return res.status(400).json('Email is required')
        if (!Password) return res.status(401).json('Password is required')

        const user = await prisma.users.findUnique({where: {Email}})
        if (!user) {
            return res.status(401).json('Email or password incorrect')
        }

        const passwordCheck = await bcrypt.compare(Password, user.Password)
        if (!passwordCheck) return res.status(401).json('Email or password incorrect')

        const token = jwt.sign({ID: user.ID}, secret, {expiresIn})
        return res.status(200).json({ID: user.ID, status: "Authenticated", token})
    }
}