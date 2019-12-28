var express = require ('express');

var app = express();

//static files
app.use(express.static('./public'))

//set up template or view engine
app.set('view engine', 'ejs');

//set up the routes
const todoRoutes = require('./routes/todoRoutes');

//create todo route
app.use(todoRoutes);

const PORT = process.env.PORT || 8080;

//listen to port
app.listen(PORT, ()=> {
  console.log(`You are listening port ${PORT}`);
});
