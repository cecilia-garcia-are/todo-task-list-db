import Task from "../../models/tasksModel.js";
import Category from "../../models/categoriesModel.js";
import User from "../../models/usersModel.js";

//creando tarea nueva
const createTask = async (req, res) => {
  
  try {
    const { idUser, category, ...task } = req.body;

    const getUser = await User.findOne({
      where: { id: idUser },
    });

   const newTask = await Task.create(task);
    const [createcategory, created] = await Category.findOrCreate({
      where: { name: category },
      defaults: category,
    });

    await getUser.addTask(newTask)
    await newTask.addCategory(createcategory)

    res.status(201).end()
  } catch (error) {
    
    res.status(400).json(error)
  }
}

// modificar tarea

const updateTask = async (req, res) => {
  try {
    const { id } = req.params  
    const { body } =req
    await Task.update( body, {
        where: {id}
    })
    res.status(204).end()
  } catch (error) {
    res.status(400).json(error)
  }
}

// eliminar tareas

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params
    await Task.destroy({
      where: { id },
    });
    res.status(204).end()
  } catch (error) {
    res.status(400).json(error)
  }
}

//llamar a todas mis tareas

const getAllTask = async (req, res) => {
    try {
        const task = await Task.findAll()
        res.status(200).json(task)
    } catch (error) {
        res.status(400).json(error)
    }
}

export { 
  createTask, 
  updateTask, 
  deleteTask, 
  getAllTask };
