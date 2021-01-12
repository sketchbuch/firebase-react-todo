const functions = require('firebase-functions');
const app = require('express')();
const {
  deleteTodo,
  editTodo,
  getAllTodos,
  postOneTodo,
} = require('./apis/todos')

const {
  loginUser,
  signUpUser,
} = require('./apis/users')

app.delete('/todo/:todoId', deleteTodo);
app.get('/todos', getAllTodos);
app.post('/todo', postOneTodo);
app.put('/todo/:todoId', editTodo);

app.post('/login', loginUser);
app.post('/signup', signUpUser);

exports.api = functions.https.onRequest(app);