const TodoModel = require('../models/todo.model');

class TodoService {
    static getAllTodo = async () => {
        const todos = await TodoModel.find();
        return todos;
    }
    static  createTodo = async (body) =>  {
        try {
            console.log('vizvan create todo-----------------------------');
            const todo = await TodoModel.create(body);
            console.log('vizvan create todo posle awaite-----------------------------');

            console.log(todo)
            console.log(todo)
            return todo; 
        } catch (err) {
            console.log("mini error")
            throw {status: 400, msg: "Invalid data"}
        }
        
    }

    static getTodoById = async id =>  {
        const todo = await TodoModel.findById(id);
        if(!todo){
            throw {status: 404, msg:"Todo not found"};
        }
        return todo;
    };

    static updateTodoById = async (id, data) => {
        const dbRes = await TodoModel.findByIdAndUpdate(id , data, {runValidators: true});
        console.log('problem0')
        console.log(dbRes);
        if(!dbRes){
            throw {status: 404, msg:"Todo not found"};
        }
        return dbRes;
    }

    static deleteTodoById = async id => {
        const dbRes = await TodoModel.findByIdAndDelete(id);
        if(!dbRes){
            throw { status: 404, msg: 'Todo not found' }
        }
    }
} 
module.exports = TodoService;
 

  
//   exports.updateTodo = async (id, body) => {
//       const todo = await Todo.findByIdAndUpdate(id, body, {
//           new: true,
//           runValidators: true,
//         });
//       if (!todo) throw new HttpError(400, "Item not found.");
//       return todo;
//   };
  
//   exports.deleteTodoById = async (id) => {
//       const todo = await Todo.findByIdAndDelete(id);
//       if (!todo) throw new HttpError(400, "Item not found.");
//   }