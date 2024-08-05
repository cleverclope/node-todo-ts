import { Router } from "express"
import { addTodo, getTodos, updateTodo } from "../controllers/todos"

const router: Router = Router()

router.get("/todos", getTodos)

router.post("/add-todo", addTodo)

router.put("edit-todo/:id", updateTodo)

router.delete("delete-todo/:id")


export default router