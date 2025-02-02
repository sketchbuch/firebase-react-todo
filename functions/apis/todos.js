const { db } = require('../utils/admin');

exports.deleteTodo = (request, response) => {
  const document = db.doc(`/todos/${request.params.todoId}`);

  document
    .get()
    .then((doc) => {
      if (!doc.exists) {
        return response.status(404).json({ error: 'Todo not found' })
      }

      if (doc.data().username !== request.user.username) {
        return response.status(403).json({ error: "UnAuthorized" })
      }

      return document.delete();
    })
    .then(() => {
      response.json({ message: 'Delete successfull' });
    })
    .catch((err) => {
      console.error(err);
      return response.status(500).json({ error: err.code });
    });
};

exports.editTodo = (request, response) => {
  if (request.body.todoId || request.body.created) {
    response.status(403).json({ message: 'Not allowed to edit' });
  }

  let document = db.collection('todos').doc(`${request.params.todoId}`);

  document.update(request.body)
    .then(() => {
      response.json({ message: 'Updated successfully' });
    })
    .catch((err) => {
      console.error(err);
      return response.status(500).json({
        error: err.code
      });
    });
};

exports.getAllTodos = (request, response) => {
  db
    .collection('todos')
    .where('username', '==', request.user.username)
    .orderBy('created', 'desc')
    .get()
    .then((data) => {
      let todos = [];
      data.forEach((doc) => {
        todos.push({
          todoId: doc.id,
          title: doc.data().title,
          body: doc.data().body,
          created: doc.data().created,
        });
      });
      return response.json(todos);
    })
    .catch((err) => {
      console.error(err);
      return response.status(500).json({ error: err.code });
    });
};

exports.postOneTodo = (request, response) => {
  if (request.body.body.trim() === '') {
    return response.status(400).json({ body: 'Must not be empty' });
  }

  if (request.body.title.trim() === '') {
    return response.status(400).json({ title: 'Must not be empty' });
  }

  const newTodoItem = {
    body: request.body.body,
    created: new Date().toISOString(),
    title: request.body.title,
    username: request.user.username,
  }

  db
    .collection('todos')
    .add(newTodoItem)
    .then((doc) => {
      const responseTodoItem = newTodoItem;
      responseTodoItem.id = doc.id;
      return response.json(responseTodoItem);
    })
    .catch((err) => {
      console.error(err);
      response.status(500).json({ error: 'Something went wrong' });
    });
};