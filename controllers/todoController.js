const Todo = require('../models/todoModel');

exports.getTodos = (req, res, next) => {
    //get data from Mongodb and pass it to the view
    Todo.find().then(todos => {
        res.render('home', {todos: todos});
    })
    .catch(err => {
        const error = new Error(err);
        error.httpStatusCode = 500;
        return next(error);
    });
};

exports.getAddTodos = (req, res, next) => {
    //Render the view to Add Data
    res.render('add-todo')
};

exports.postAddTodos = (req, res, next) => {
    //Save the data to the database
    const todo = req.body.todo
    var newTodo = Todo({
        todo: todo
    });
    newTodo
    .save()
    .then(result => {
        console.log('Todo Added successfully');
        res.redirect('/');
      })
      .catch(err => {
        const error = new Error(err);
        error.httpStatusCode = 500;
        return next(error);
      });
};

exports.deleteTodos = (req, res, next) => {
    const todoId = req.params.todoDocId;
    Todo.findByIdAndRemove(todoId)
      .then(todo => {
        if (!todo) {
          return next(new Error('todo not found.'));
        }
      })
      .then(() => {
        console.log('Todo Document Deleted');
        res.status(200).json({ message: 'Success!' });
      })
      .catch(err => {
        res.status(500).json({ message: 'Deleting ToDo failed.' });
      });
};