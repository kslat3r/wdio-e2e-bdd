const ResponseBuilder = require('../../../common/builder/response');
const merge = require('deepmerge');
const userTemplate = require(`../../data/${process.env.TARGET_ENV}/response/user.json`);
const todoTemplate = require(`../../data/${process.env.TARGET_ENV}/response/todo.json`);

class UserResponseBuilder extends ResponseBuilder {
  constructor (id) {
    const todos = [];

    for (let i = 1; i < 4; i++) {
      todos.push(merge(todoTemplate, {
        id: i,
        userId: parseInt(id, 10)
      }));
    }

    super(merge(userTemplate, {
      id: parseInt(id, 10),
      todos
    }));

    return this;
  }
}

module.exports = UserResponseBuilder;
