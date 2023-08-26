class User {
  #password;
	#login;

  constructor(login, password) {
    this.#login = login;
		this.#password = password;
  }

//   setPassword (password) {
//     if (!this.#password) {
//       this.#password = [...password].reverse().join('')
//     } else {
// 			console.log('Password has been saved!')
// 		}
//   }
// Альтернатива if ... else ...

  setPassword(password) {
		try {
			if (this.#password) {
				throw new Error('Password has already been set!');
			}
			this.#password = [...password].reverse().join('') ;
		} catch (error) {
			console.log(error.message)
		}
  };

	get login () {
		return this.#login;
	}

	getLoginAndPassword(password) {
    try {
			if (!this.#login) {
			throw new Error('Login is empty!');
		  }
		  if (!this.#password) {
			  throw new Error('Password has not been saved!')
		  }
		  if (!password) {
			  throw new Error('Enter password!')
		  }
		  const passwordValidate = [...this.#password].reverse().join('') === password 
		    ? true
			  : false;
		  console.log(`login: ${this.#login}, password validate: ${passwordValidate}`)
		} catch (error) {
      console.log(error.message);
		}
	}

	changePassword(oldPassword, newPassword) {

		try {
			if (!oldPassword || !newPassword) {
				throw new Error();
			}
			if (!this.#password) {
				throw new Error('Use setPassword method for set password!');
			}
			if (oldPassword !== [...this.#password].reverse().join('')) {
				throw new Error('You enter incorrect password!');
			}
			this.#password = newPassword;
		} catch(error) {
      console.log(error.message);
		}
	}

	
}

const user1 = new User('login');
console.log(user1)
user1.setPassword('iuiui6')
user1.getLoginAndPassword('abc')
user1.login = 'dsfdsfs';
user1.changePassword('iuiwui6', 'asd')
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