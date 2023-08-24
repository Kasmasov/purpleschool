class User {
  #password;
	#login;

  constructor (login, password) {
    this.#login = login;
		this.#password = password;
  }

  setPassword (password) {
    if (!this.#password) {
      this.#password = [...password].reverse().join('');
    } else {
			console.log('Password has been saved!')
		}
  }

	get login () {
		return this.#login;
	}

	getLoginAndPassword (password) {
		if (this.#login) {
			if (this.#password) {
				if (password){
					const passwordValidate = [...this.#password].reverse().join('') === password 
					  ? true
						: false;
					console.log(`login: ${this.#login}, password validate: ${passwordValidate}`)
				} else {
          console.log('Enter password!')
				}
			} else { 
				console.log('Password has not been saved!')
			}
		} else { 
			console.log('Login is empty!') 
	  }
	}

	changePassword (oldPassword, newPassword) {

    if (!oldPassword || !newPassword) {
			console.log('Old or a new password is enpty!')
		} else {
			if (!this.#password) {
				console.log('Use setPassword method for set password!')
			} else {
				if (oldPassword === [...this.#password].reverse().join('')) {
					this.#password = newPassword;
				} else {
					console.log('You enter incorrect password!')
			}
			}
		}
	}

	
}

const user1 = new User('login');
console.log(user1)
user1.setPassword('abc')
user1.getLoginAndPassword('abc')
user1.changePassword('abc', 'xwz');
user1.login = 'dsfdsfs';
console.log(user1)