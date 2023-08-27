function printLogAndPass(login, text) {
	console.log(`login: ${login}, password validate: ${text}`)
}

class User {
  #password;
	#login;

  constructor(login, password) {
    this.#login = login;
		this.#password = password;
  }

  #oldPassIsAlreadyThere() {
		if (this.#password) {
			throw new Error('Password has already been set!');
		}
		return;
	}

	#oldPassIsEmpty() {
    if (!this.#password) {
			throw new Error('Use setPassword method for set password!');
		}
		return;
	}

	#newPassIsEmpty(password) {
    if (!password) {
			throw new Error('Enter new password!');
		}
		return;
	}

	#newAndOldPassesAreEmpty(password) {
    if (!this.#password || !password) {
			throw new Error('Old or a new password is empty!');
		}
		return;
	}

	#loginIsEmpty() {
		if (!this.#login) {
			throw new Error('Login is empty!');
		}
		return;
	}

	#passValidate(password) {
		return [...this.#password].reverse().join('') === password 
		? true
		: false;
	}

	#isPasscorrect(password) {
		if (password !== [...this.#password].reverse().join('')) {
			throw new Error('You enter incorrect password!');
		}
	}

  setPassword(password) {
		try {
			this.#oldPassIsAlreadyThere();
			this.#newPassIsEmpty(password);
			this.#password = [...password].reverse().join('') ;
		} catch (error) {
			console.log(error.message)
		}
  };

	getLoginAndPassword(password) {
    try {
			this.#loginIsEmpty();
			this.#oldPassIsEmpty();
			const validation = this.#passValidate(password);
			console.log(validation);
			printLogAndPass(this.#login, validation);
		} catch (error) {
      console.log(error.message);
		}
	}

	changePassword(oldPassword, newPassword) {

		try {
			this.#newAndOldPassesAreEmpty(newPassword);
			this.#oldPassIsEmpty();
			this.#isPasscorrect(oldPassword);
			this.#password = newPassword;
		} catch(error) {
      console.log(error.message);
		}
	}
}

const user1 = new User('login');
console.log(user1)
user1.setPassword('ere4')
user1.getLoginAndPassword('ere4')
user1.changePassword('ere4', 'asd')
console.log(user1)