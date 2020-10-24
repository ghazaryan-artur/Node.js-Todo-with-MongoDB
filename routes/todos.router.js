const { Router } = require('express')
const { getAllTodos, getTodo, deleteTodo, updateTodo, createTodo } = require('../controllers/todos.controller');

const router = Router();

router.route('/')
    .get(getAllTodos)
    .post(createTodo);

router.route('/:id')
    .get(getTodo)
    .put(updateTodo)
    .delete(deleteTodo);

 

module.exports = router

