import { Router } from "express";
import { createUser } from "./usersControllers.js";
import { deleteUser } from "./usersControllers.js";
import { getAllUsers } from "./usersControllers.js";
import { updateUsers } from "./usersControllers.js";
import { getUserById } from "./usersControllers.js";

const router = Router()

router.route('/users')
.post(createUser)
.get(getAllUsers)

router.route('/users/:id')
.patch(updateUsers)
.delete(deleteUser)
.get(getUserById)

export default router