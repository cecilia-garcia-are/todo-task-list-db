import Category from "../../models/categoriesModel.js";
import Task from "../../models/tasksModel.js";

//crear categoria
const createCategory = async (req, res) => {
    try {
        const {body} = req
        const newCategory = await Category.create(body)
        res.status(201).json(newCategory)
    } catch (error) {
        res.status(400).json(error)
    }
}

//llamar categoria por id
const getCategory = async (req, res) => {
    try {
        const {id} = req.params
        const idCategory = await Category.findByPk(id, {
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
        res.status(200).json(idCategory)
    } catch (error) {
        res.status(400).json(error)
    }
}

//llamar a todas mis categorias

const getAllCategories = async (req, res) => {
    try {
        const category = await Category.findAll()
        res.status(200).json(category)
    } catch (error) {
        res.status(400).json(error)
    }
}

//agregar categoria a una tarea
const addCategoryTask = async (req, res) => {
    try {
        const {idTask, ...category} = req.body
        const getTask= await Task.findAll({
            where: {id: idTask}
        })
        const [getCategory, created] = await Category.findOrCreate({
            where: {name: category.name},
            defaults: category
        })
        await getCategory.addTask(getTask)
        res.status(201).end()
    } catch (error) {
        res.status(400).json(error)
    }
}

//actualizar categoria
const updateCategory = async (req, res) => {
    try {
      const { id } = req.params  
      const { body } =req
      await Category.update( body, {
          where: {id}
      })
      res.status(204).end()
    } catch (error) {
      res.status(400).json(error);
    }
  }

//eliminar categoria
  const deleteCategory = async (req, res) => {
    try {
      const { id } = req.params;
      await Category.destroy({
        where: { id },
      });
      res.status(204).end();
    } catch (error) {
      res.status(400).json(error);
    }
  }

export { 
    createCategory, 
    getCategory, 
    addCategoryTask, 
    updateCategory, 
    deleteCategory,
    getAllCategories }

