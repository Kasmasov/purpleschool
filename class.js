class User {
  #password;
	#login;

  constructor (login, password) {
    this.#login = login;
		this.#password = password;
  }

  // setPassword (password) {
  //   if (!this.#password) {
  //     this.#password = [...password].reverse().join('')
  //   } else {
	// 		console.log('Password has been saved!')
	// 	}
  // }
	// Альтернатива if ... else ...
  setPassword (password) {
		try {
			this.#password = [...password].reverse().join('') || console.log('Password is incorrect!');
		} catch (error) {
			console.log(error.message)
		}
  };

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
user1.setPassword('iuiui6')
user1.getLoginAndPassword('abc')
// user1.changePassword('iuiui6', 'xwz');
user1.login = 'dsfdsfs';
console.log(user1)


class Car {
	#_brend;
	#_model;
	#_mileage;

	constructor(brend, model, mileage) {
		this.#brend = brend;
		this.#model = model;
		this.#mileage = mileage;
	}

	set #brend (brend) {
		this.#_brend = brend;
	}
	
	set #model (model) {
		this.#_model = model;
	}

	set #mileage (mileage) {
		this.#_mileage = mileage;
	}

	info() {
		console.log(`brend: ${this.#_brend}, model: ${this.#_model}, mileage: ${this.#_mileage}`)
	}

}

const bmw = new Car('BMW', 'X-5', 100000)
console.log('bmw', bmw)
bmw.info();