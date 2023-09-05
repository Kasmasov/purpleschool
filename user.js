class User {

  constructor(task) {
    this.task = task;
  }

  do() {
    return this.task.run(this.task.message);
  }
}

export default User;