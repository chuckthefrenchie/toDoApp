var mongoose = require('mongoose');

var todoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: "name cant be blank"
    },
    completed: {
        type: Boolean,
        default: false
    },
    cretaed_date: {
        type: Date,
        default: Date.now
    }

})

var Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;

