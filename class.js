function setPass(oldPass, newPass) {
	
	if (oldPass) {
		throw new Error('Password has already been set!');
	}
	oldPass = [...newPass].reverse().join('') ;
}

function getLogAndPass(login, oldPass, newPass) {
	if (!login) { throw new Error('Login is empty!'); }
	if (!oldPass) { throw new Error('Password has not been saved!') }
	if (!newPass) { throw new Error('Enter password!') }
	const passwordValidate = [...oldPass].reverse().join('') === newPass 
		? true
		: false;
	console.log(`login: ${login}, password validate: ${passwordValidate}`)
}

function changePass(oldPass, newPass, savedPass) {
	if (!oldPass || !newPass) {
		throw new Error('Old or a new password is enpty!');
	}
	if (!savedPass) {
		throw new Error('Use setPassword method for set password!');
	}
	if (oldPass !== [...savedPass].reverse().join('')) {
		throw new Error('You enter incorrect password!');
	}
	savedPass = newPassword;
}

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
			setPass(this.#password, password)
		} catch (error) {
			console.log(error.message)
		}
  };

	get login () {
		return this.#login;
	}

	getLoginAndPassword(password) {
    try {
			getLogAndPass(this.#login, this.#password, password)
		} catch (error) {
      console.log(error.message);
		}
	}

	changePassword(oldPassword, newPassword) {

		try {
			changePass(oldPass, newPassword, savedPass)
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