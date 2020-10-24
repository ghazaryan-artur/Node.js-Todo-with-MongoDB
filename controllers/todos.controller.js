const asyncWrapper = require('../middleware/asyncWrapper');
const TodoService  = require('../services/todo.service')

exports.getAllTodos = asyncWrapper( async(req, res) => {
    const todos = await TodoService.getAllTodo();

    res.status(200).json({
        success: true,
        data: todos
    });

});

exports.getTodo = asyncWrapper( async (req, res) => {
    console.log('get to do vizvan')
    console.log(req.params.id);
    const todo = await TodoService.getTodoById(req.params.id ||  "0");
    console.log(todo);
    res.status(200).json({
        success: true,
        error: "",
        data: todo
    }); 

});
exports.createTodo = asyncWrapper( async (req, res) => {

    const todo = await TodoService.createTodo(req.body);
    console.log('todo from controller');
    console.log(todo)
    res.status(200).json({
        success: true,
        data: todo
    })
});

exports.deleteTodo = asyncWrapper( async (req, res) => {
    await TodoService.deleteTodoById(req.params.id);

    res.status(200).json({
        success: true
    });
});




exports.updateTodo = asyncWrapper( async (req, res) => {
    const dbRes = await TodoService.updateTodoById(req.params.id, { name: req.body.name });

    res.status(201).json({
        success: true,
        error: "",
    });
});