const express = require('express')
const app = express()

app.listen(3000, console.log("Server is running on port 3000!"))
app.use(express.json())

const cors = require('cors');
app.use(cors());

const routes = require('./routes')
app.use(routes)

const prisma = require('./database')
prisma.$connect().then(() => console.log("Database is connected...")).catch((error) => console.log(error))