const functions = require('firebase-functions');
const app = require('express')();
const {
  deleteTodo,
  editTodo,
  getAllTodos,
  postOneTodo,
} = require('./apis/todos')
const auth = require('./utils/auth');
const {
  loginUser,
  signUpUser,
  uploadProfilePhoto,
} = require('./apis/users')

// Todos
app.delete('/todo/:todoId', deleteTodo);
app.get('/todos', getAllTodos);
app.post('/todo', postOneTodo);
app.put('/todo/:todoId', editTodo);

// Users
app.post('/login', loginUser);
app.post('/signup', signUpUser);
app.post('/user/image', auth, uploadProfilePhoto);

exports.api = functions.https.onRequest(app);