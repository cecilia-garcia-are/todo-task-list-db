import User from "./usersModel.js";
import Task from "./tasksModel.js";
import Category from './categoriesModel.js';

const foreignkeyModels = () => {

    //user tiene muchas tareas
    User.hasMany(Task, {foreignKey: 'userId'})

    //una tarea tiene 1 solo user
    Task.belongsTo(User, {foreignKey: 'userId'})

    // categoria tiene muchas tareas
    Category.belongsToMany(Task, {through: 'CategoriesTasks'})

    //una tarea tiene muchas categorias
    Task.belongsToMany(Category, {through: 'CategoriesTasks'})



}

export default foreignkeyModels