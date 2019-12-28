const express = require('express');
const router = express.Router();
  
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});

const todoController = require('../controllers/todoController');

//call the controller
router.get('/', todoController.getTodos);

router.get('/add-todo', todoController.getAddTodos);

router.post('/add-todo', urlencodedParser, todoController.postAddTodos);

// router.post('/delete-todo/', urlencodedParser, todoController.postDeleteTodos);
router.delete('/delete-todo/:todoDocId', urlencodedParser, todoController.deleteTodos);

module.exports = router;