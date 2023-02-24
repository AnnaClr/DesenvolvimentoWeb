const prisma = require('../databases')

module.exports = {
    async read(req, res) {
        const { ID } = req.query;
        if (ID) {
            const listCourse = await prisma.cursoss.findUnique({where: {ID: Number(ID)}})
            if (!listCourse) return res.json('User not found')
            res.json(listCourse)
        } else {
            const listCourses = await prisma.cursoss.findMany()
            res.json(listCourses)
        }
    },

    async create(req, res) {
       try {
        const {Nome, Horas} = req.body
        const createCourse = await prisma.cursoss.create({data: {Nome, Horas: Number(Horas)}})
        res.json(createCourse)
       } catch (error) {
         return res.json(error.message)
       }
    },

    async update(req, res) {
        try {
            const { ID } = req.params
            const { Nome, Horas} = req.body
            const updateCourse = await prisma.cursoss.update({
                data: {Nome, Horas: Number(Horas)},
                where: ({ID: Number(ID)})        
            })
            return res.json(updateCourse)
        } catch {
            return res.json(error.message)
        }
    },

    async delete(req, res) {
        try {
            const { ID } = req.params
    
            const deleteCourse = await prisma.cursoss.delete({
                where: ({ID: Number(ID)})        
            })
            return res.json(`Curso ${deleteCourse.Nome} deletada com sucesso!`)
        } catch {
            return res.json(error.message)
        }
    }
}