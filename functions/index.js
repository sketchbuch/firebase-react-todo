const functions = require('firebase-functions');
const app = require('express')();

const {
  deleteTodo,
  editTodo,
  getAllTodos,
  postOneTodo
} = require('./apis/todos')

app.delete('/todo/:todoId', deleteTodo);
app.get('/todos', getAllTodos);
app.post('/todo', postOneTodo);
app.put('/todo/:todoId', editTodo);

exports.api = functions.https.onRequest(app);