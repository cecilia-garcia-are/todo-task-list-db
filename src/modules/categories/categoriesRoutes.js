import { Router } from "express";
import { addCategoryTask } from "./categoriesControllers.js";
import { createCategory } from "./categoriesControllers.js";
import { deleteCategory } from "./categoriesControllers.js";
import { getCategory } from "./categoriesControllers.js";
import { getAllCategories } from "./categoriesControllers.js";
import { updateCategory } from "./categoriesControllers.js";


const router = Router()

router.route('/category')
.post(createCategory)
.get(getAllCategories)

router.route('/category/:id')
.get(getCategory)
.patch(updateCategory)
.delete(deleteCategory)

router.post('/category/addCategoryT', addCategoryTask)


export default router