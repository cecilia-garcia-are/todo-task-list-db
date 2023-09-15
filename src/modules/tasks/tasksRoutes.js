import { Router } from "express";
import { createTask } from "./tasksControllers.js";
import { deleteTask } from "./tasksControllers.js";
import { updateTask } from "./tasksControllers.js";
import { getAllTask } from "./tasksControllers.js";

const router = Router()

router.route('/task')
.post(createTask)
.get(getAllTask)



router.route('/task/:id')
.delete(deleteTask)
.patch(updateTask)




export default router