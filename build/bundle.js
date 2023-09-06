'use strict';

class User {

  constructor(task) {
    this.task = task;
  }

  do() {
    return this.task.run(this.task.message);
  }
}

class Task {

  constructor(message) {
    this.message = message;
  }

	run(message) {
		return console.log(`${message}`)
	}
}

const task = new Task('My export');
const user = new User(task);


console.log(user.do());
