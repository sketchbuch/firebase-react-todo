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
  getUserDetail,
  loginUser,
  signUpUser,
  updateUserDetails,
  uploadProfilePhoto,
} = require('./apis/users')

// Todos
app.delete('/todo/:todoId', auth, deleteTodo);
//app.get('/todo/:todoId', auth, getOneTodo);
app.get('/todos', auth, getAllTodos);
app.post('/todo', auth, postOneTodo);
app.put('/todo/:todoId', auth, editTodo);

// Users
app.post('/login', loginUser);
app.post('/signup', signUpUser);
app.post('/user/image', auth, uploadProfilePhoto);
app.get('/user', auth, getUserDetail);
app.post('/user', auth, updateUserDetails);

exports.api = functions.https.onRequest(app);