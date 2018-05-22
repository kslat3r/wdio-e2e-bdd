const ResponseBuilder = require('../../../common/builder/response');
const merge = require('deepmerge');
const userData = require(`../../data/${process.env.TARGET_ENV}/response/user.json`);
const todoData = require(`../../data/${process.env.TARGET_ENV}/response/todo.json`);

class UserResponseBuilder extends ResponseBuilder {
  constructor (id) {
    const todos = [];

    for (let i = 1; i < 4; i++) {
      todos.push(merge(todoData, {
        id: i,
        userId: parseInt(id, 10)
      }));
    }

    super(merge(userData, {
      id: parseInt(id, 10),
      todos
    }));

    return this;
  }
}

module.exports = UserResponseBuilder;
