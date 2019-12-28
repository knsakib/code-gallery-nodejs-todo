const mongoose = require('mongoose');
//connect to the database
mongoose.connect('YOUR_MONGODB_STRING', { useNewUrlParser: true, useUnifiedTopology: true })

.then(result => {
    console.log("successfully connected to database");
  })
  .catch(err => {
    console.log(err);
  });

const Schema = mongoose.Schema;

const todoSchema = new Schema({
    todo: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('todo', todoSchema);