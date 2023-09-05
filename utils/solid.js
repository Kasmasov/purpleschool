// Принцип единой отвественности

class Character {
  #inventoru = [];
  #helth = 5;

  pickItem(item) {
      this.#inventoru.push(item);
  }

  recieveDamage(damage) {
    this.#helth -= damage;
  }
}

class DB {

	save(item) {
		localStorage.setItem('char', item);
	}

	load() {
		///...
	}
}

// Принцип открытости и закрытости

class Treasure {
	value = 0;
}
class Coin extends Treasure {
	value = 1;
}
class Crystal extends Treasure {
	value = 10;
}
class Brilliant extends Treasure {
	value = 20;
}

class Inventory {
	#score

	pick(treasure) {
		this.#score += treasure.value;
	}
}

// Принцип подстановки Барбары Лисков

class User {
	#role = 'user';

	getRole() {
		return this.#role;
	}
}

class Admin extends User {
	#role = ['user', 'admin'];

	getRole() {
		return this.#role.join(', ')
	}
}

function logUsersRole (user) {
  console.log(`Role: ${user.getRole().toUpperCase()}`)
};

logUsersRole(new User());
logUsersRole(new Admin());

// Принцип разделения интерфейсов

class Weapon {
	coast;

	dealDamage() {

	}
}

class Rifle extends Weapon {
	shoot () {
		//...
	}

	dealDamage() {
		this.dealDamage();
	}
}

class Sword extends Weapon {
  strike () {
		this.dealDamage();
	}
}

// Принцип инверсии зависимостей

class Db {
	save(items) { 
    console.log(`Saved: ${items}`);
	}
}

class MongoDb extends Db {
  save(items) {
	  console.log(`Saved to MangoDB: ${items}`);
	}
}

class TodoList {
	items = [1, 2, 3];
	db;

	constructor(db) {
		this.db = db;
	}

	saveToDb () {
    this.db.save(this.items);
	}

}

const list1 = new TodoList(new Db());
const list2 = new TodoList(new MongoDb());
list1.saveToDb();
list2.saveToDb();

