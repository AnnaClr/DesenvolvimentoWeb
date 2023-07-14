module.exports = {
    create(req, res) {
        const {id, name} = req.body
        res.json({situation: `User ${name} de ID ${id} created `})
    },

    read(req, res) {
        const {id} = req.params
        res.json({situation: `Show user ID ${id} `})
        
    },

    update(req, res) {
        const {id} = req.params
        res.json({situation: `Update user ${zid}`})
        
    },

    delete(req, res) {
        const {id} = req.params
        res.json({situation: `User ${id} deleted`})
        
    }
}