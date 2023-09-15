import express from 'express';
import db from './utils/database.js';
import usersRoutes from './modules/users/usersRoutes.js';
import taskRoutes from './modules/tasks/tasksRoutes.js';
import categoriesRoutes from './modules/categories/categoriesRoutes.js';
import foreignkeyModels from './models/foreignkeyModels.js';
import cors from 'cors';

//llaves foraneas
foreignkeyModels()


const PORT = process.env.PORT ?? 8000


const app = express()
app.use(express.json())
app.use(cors())

//rutas
app.use(usersRoutes)
app.use(taskRoutes)
app.use(categoriesRoutes)

//base de datos

db.authenticate()
.then(() => console.log("Base de datos conectada correctamente"))
.catch((e) => console.log(e));


db.sync()
  .then(() => console.log("base de datos sync"))
  .catch((e) => console.log(e));


//healtCheck
app.get('/', (req, res) =>{
    res.send('Ok')
})




//servidor
app.listen(PORT, () => {
console.log(`Se esta ejecutando el servidor ${PORT}`)
})