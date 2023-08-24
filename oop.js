/* 
Реализовать на функциях и прототипах корзину товаров с методами:
  - Добавить товар
  - Увеличить число товаров
  - Уменьшить число товаров
*/

const product = { id: 1, name: 'Bread', count: 1 };

const Cart = function () {
  this.products = [];
};

Cart.prototype.addProduct = function(product) {
	if (this.products.find((product) => product.id === product.id)) {
		return
	}
	this.products.push(product);
};

Cart.prototype.increaseAmout  = function (id) {
  this.products = this.products.map((product) => {
		if (product.id === id) {
			product.count++;
			return product;
		}
		return product; 
	});
}

Cart.prototype.decreaseAmout  = function (id) {
  this.products = this.products
	  .map((product) => {
		  if (product.id === id) {
			  product.count--;
			  return product;
		  }
		  return product; 
	  })
	  .filter((product) => product.count > 0);
}


const cart = new Cart();

cart.addProduct(product);
cart.increaseAmout(1);
cart.decreaseAmout(1);

const Character = function (name, race, language) {
  this.name = name;
	this.race = race;
	this.language = language;
}

Character.prototype.speak = function () {
	console.log(`${this.name}, ${this.language}`);
}

const Ork = function (name, race, language, weapons) {
	Character.call(this, name, race,language);
	this.weapons = weapons;
}

Ork.prototype = Object.create(Character.prototype);
Ork.prototype.constructor = Ork;

Ork.prototype.stab = function () {
	console.log('I stab you!')
}

const ork = new Ork('John', 'green', 'thaba-thaba')
ork.weapons = 'Axe';
ork.stab();

ork.speak();
console.log(ork);
ork.stab();

const Elf = function (name, race, language) {
	Character.call(this, name, race, language);
}

Elf.prototype = Object.create(Character.prototype);
Elf.prototype.constructor = Elf;
Elf.prototype.spell = function (spell, spellType) {
	this.spell = spell;
	this.spellType = spellType;
	console.log(`${spell} - I conjure you with a ${spellType}`);
};

const elf = new Elf('Robin', 'red', 'uba-tyba');
console.log(elf);
elf.spell('hyka-muka-kreks-peks', 'spell for power');
