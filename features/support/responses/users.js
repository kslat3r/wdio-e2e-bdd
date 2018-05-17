const ResponseBuilder = require('./builder');
const merge = require('deepmerge');
const userTemplate = require('../templates/user.json');
const todoTemplate = require('../templates/todo.json');

class UsersResponseBuilder extends ResponseBuilder {
  constructor (id) {
    super();

    const todos = [];

    for (let i = 1; i < 4; i++) {
      todos.push(merge(todoTemplate, {
        id: i,
        userId: parseInt(id, 10)
      }));
    }

    this.data = [
      merge(userTemplate, {
        id: parseInt(id, 10),
        todos
      })
    ];
  }
}

module.exports = UsersResponseBuilder;
