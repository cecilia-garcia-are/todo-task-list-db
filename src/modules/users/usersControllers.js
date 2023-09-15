import Category from "../../models/categoriesModel.js";
import Task from "../../models/tasksModel.js";
import User from "../../models/usersModel.js";


// crear usuario
const createUser = async (req, res) => {
    try {
        const {body} = req
        const newuser = await User.create(body)
        res.status(201).json(newuser)
    } catch (error) {
        res.status(400).json(error)
    }
}

//llamar todos mis usuarios con cateogria
const getAllUsers = async (req, res) =>{
    try {
        const users = await User.findAll({
            include: [{
                model: Task, 
                attributes: ['id', 'title', 'description', 'completed'],
                include: {
                    model: Category,
                    attributes: ['id', 'name', 'description'],
                    through: {attributes: []}
                }
            }]
        })
        res.status(200).json(users)
    } catch (error) {
        res.status(400).json(error)
    }
}

//modificar usuario
const updateUsers = async (req, res) => {
    try {
      const { id } = req.params  
      const { body } =req
      await User.update( body, {
          where: {id}
      })
      res.status(204).end()
    } catch (error) {
      res.status(400).json(error)
    }
  }
  
 
  //eliminar usuario
  const deleteUser = async (req, res) => {
    try {
      const { id } = req.params
      await User.destroy({
        where: { id },
      });
      res.status(204).end()
    } catch (error) {
      res.status(400).json(error)
    }
  }

  //llamar al usuario por id
  const getUserById =async (req, res) => {
    try {
        const {id} = req.params
        const user = await User.findByPk(id, {
            include: [{
                model: Task, 
                attributes: ['id', 'title', 'description', 'completed'],
                include: {
                    model: Category,
                    attributes: ['id', 'name', 'description'],
                    through: {attributes: []}
                }
            }]
        })
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json(error) 
    }
  }


export { 
  createUser, 
  getAllUsers, 
  updateUsers, 
  deleteUser, 
  getUserById }

