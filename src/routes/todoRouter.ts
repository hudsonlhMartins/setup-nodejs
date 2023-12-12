import { ControllerTodos } from "@src/controllers/Todos/ControllerTodos";
import express from "express";

const routerTodos = express.Router();

const controllerTodo = new ControllerTodos();

routerTodos.get("/todos", (req, res) =>
  controllerTodo.getTodos.call(controllerTodo, req, res)
);

export default routerTodos;
