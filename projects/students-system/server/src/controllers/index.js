const prisma = require('../database')
module.exports = {
    async read(req, res) {
        try {
            const { ID } = req.query
            if (ID) {
                const student = await prisma.students.findUnique({where: {ID: Number(ID)}})
                if (!student) return res.status(400).json("Aluno não encontrado.")
                return res.json(student)
            } else {
                const students = await prisma.students.findMany()
                return res.json(students)
            }
        } catch (error) {
            console.log(error);
        }
    },

    async create(req, res) {
        try {
            const { Nome, Email, Celular, Cidade } = req.body
            if (!Nome || !Email || !Celular || !Cidade || 
                Nome == "" || Email == "" || Celular == "" || Cidade == "") 
            {
                return res.status(400).json("Por favor, preencha todos os dados!")
            }
            const studentEmail = await prisma.students.findUnique({where: {Email}})
            if (studentEmail) return res.json("O email já esta em uso!")

            await prisma.students.create({data: { Nome, Email, Celular, Cidade }})
            return res.json("Aluno cadastrado com sucesso!")
        } catch (error) {
            console.log(error);
        }
    },

    async update(req, res) {
        try {
            const { ID } = req.params
            const { Nome, Email, Celular, Cidade } = req.body
            if (!Nome || !Email || !Celular || !Cidade || 
                Nome == "" || Email == "" || Celular == "" || Cidade == "") 
            {
                return res.status(400).json("Por favor, preencha todos os dados!")
            }

            const student = await prisma.students.findUnique({where: {ID: Number(ID)}})
            if (!student) return res.status(400).json("Aluno não encontrado.")
           
            const studentEmail = await prisma.students.findUnique({where: {Email}})
            if (studentEmail) return res.json("O email já esta em uso!")

            await prisma.students.update({data: { Nome, Email, Celular, Cidade }, where: {ID: Number(ID)}})
            return res.json("Aluno atualizado com sucesso!")
        } catch (error) {
            console.log(error);
        }
    },

    async delete(req, res) {
        try {
            const { ID } = req.params
            const student = await prisma.students.findUnique({where: {ID: Number(ID)}})
            if (!student) return res.status(400).json("Aluno não encontrado.")

            await prisma.students.delete({where: {ID: Number(ID)}})
            return res.json("Aluno deletado com sucesso!")
        } catch (error) {
            console.log(error);
        }
    },
}