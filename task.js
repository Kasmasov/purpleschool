export class Task {

  constructor(message) {
    this.message = message;
  }

	run(message) {
		return console.log(`${message}`)
	}
}