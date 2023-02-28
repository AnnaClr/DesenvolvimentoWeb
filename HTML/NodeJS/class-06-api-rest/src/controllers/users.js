const prisma = require('../databases')

module.exports = {
   async read(req, res) {
    try {
       const { ID } = req.query;
       if (ID) {
        const listUser = await prisma.users.findUnique({where: {ID: Number(ID)}});
        return listUser ? 
        res.json(listUser) :
        res.json('User not found!');
       } else {
        const listUsers = await prisma.users.findMany();
        return res.json(listUsers);
       }
    } catch(error) {
        return res.send(error.message)
    }
   },

   async create(req, res) {
    try {
        const { Email, Password } = req.body
        if (!Email) return res.status(400).json('Email required')
        if (!Password) return res.status(400).json('Password required')
        const userEmail = await prisma.users.findUnique({where: {Email}})
        if (userEmail) {
            return res.status(400).json('Email already used')
        }
        const userCreate = await prisma.users.create({data: {Email, Password}})
        return res.status(201).json(userCreate)

    } catch(error) {
        return res.send(error.message)
    }
   },

   async update(req, res) {
    try {
        const { ID } = req.params
        const { Email, Password } = req.body

        if (!Email) return res.status(400).json('Email required')
        if (!Password) return res.status(400).json('Password required')

        const userEmail = await prisma.users.findUnique({where: {Email}})
        if (userEmail) {
            return res.status(400).json('Email already used')
        }
        const user = await prisma.users.findUnique({where: {ID: Number(ID)}})
        if (!user) return res.status(400).json('User not found!') 

        const userUpdate = await prisma.users.update({data: {Email, Password}, where: {ID: Number(ID)}})
        return res.status(201).json(userUpdate)

    } catch (error) {
        return res.send(error.message)
    }
   },

   async delete(req, res) {
    try {
        const { ID } = req.params

        const user = await prisma.users.findUnique({where: {ID: Number(ID)}})
        if (!user) return res.status(400).json('User not found!') 

        const userDelete = await prisma.users.delete({where: {ID: Number(ID)}})
        return res.json(userDelete)

    } catch (error) {
        return res.send(error.message)
    }
   }
}