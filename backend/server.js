const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 4001;

const todoRoutes = express.Router();

let Todo = require('./model/todo');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/development', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function () {
    console.log("MongoDB database connection established successfully");
})

todoRoutes.route('/').get(function (req, res) {
    Todo.find(function (err, todos) {
        if (err) {
            console.log(err);
        } else {
            res.json(todos);
            console.log(todos);
        }
    })
})

// todoRoutes.route('/').get(function (req, res) {
//     Todo.find(function (err, todos) {
//         if (err) {
//             console.log(err);
//         } else {
//             res.json(todos);
//             console.log(todos);
//         }
//     });
// });

// todoRoutes.route('/:id').get(function (req, res) {
//     let id = req.params.id;
//     Todo.findById(id, function (err, todo) {
//         res.json(todo);
//     });
// });

// todoRoutes.route('/update/:id').post(function (req, res) {
//     Todo.findById(req.params.id, function (err, todo) {
//         if (!todo)
//             res.status(404).send("data is not found");
//         else
//             todo.title = req.body.title;
//         todo.description = req.body.description;
//         todo.priority = req.body.priority;
//         todo.status = req.body.status;

//         todo.save().then(todo => {
//             res.json('Todo updated!');
//         })
//             .catch(err => {
//                 res.status(400).send("Update not possible");
//             });
//     });
// });

// todoRoutes.route('/add').post(function (req, res) {
//     let todo = new Todo(req.body);
//     todo.save()
//         .then(todo => {
//             res.status(200).json({ 'todo': 'todo added successfully' });
//         })
//         .catch(err => {
//             res.status(400).send('adding new todo failed');
//         });
// });

// todoRoutes.route('/delete/:id').post(function (req, res) {
//     Todo.findById(req.params.id, function (err, todo) {
//         if (!todo)
//             res.status(404).send("data is not found");
//         else
//             todo.remove().then(todo => {
//                 res.json('Todo deleted!');
//             }).catch(err => {
//                 res.status(400).send("Delete not possible");
//             });
//     });
// });

// app.use('/todos', todoRoutes);

app.use('/todos', todoRoutes);

app.listen(PORT, function () {
    console.log("Server is running on Port: " + PORT);
});