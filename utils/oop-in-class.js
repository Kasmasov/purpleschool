class Enemy {
  #health
  constructor(health) {
    this.#health = health;
  }

  decreaseHealth(hit) {
    this.#health = this.#health - hit;
  }
}

class Sword {
  constructor(power) {
    this.power = power;
  }

  causeDamage() {
    return this.power;
  }
}

class Orc extends Enemy {
  constructor (health) {
    super(health)
  }

  takeDamage(hit) {
		const isTakenDamage = Math.round(Math.random() * 1);

		if (isTakenDamage === 1) {
			this.decreaseHealth(hit)
			console.log('Wow that was hard!')
		} else {
			console.log('Ah-ha-ha-ha that was close!')
			return
		}
      
  }
}

const orc = new Orc(100);
const exalibur = new Sword(5);
console.log(orc);
console.log(orc.takeDamage(exalibur.causeDamage()));
console.log(orc.takeDamage(exalibur.causeDamage()));
console.log(orc.takeDamage(exalibur.causeDamage()));
console.log(orc.takeDamage(exalibur.causeDamage()));
console.log(orc);


// предложенный вариант 

class Enemy2 {
  health
  constructor(health) {
    this.health = health;
  }

  recieveDamage(demage) {
    this.health = this.health - demage;
		console.log(this.health)
  }
}

class Sword2 {
	#damage
  constructor(damage) {
    this.#damage = damage;
  }
  strike(enemy) {
    enemy.recieveDamage(this.#damage)
  }
}

class Orc2 extends Enemy2 {
	constructor(health) {
		super(health);
	} 

	recieveDamage(demage) {
		if (Math.random() > 0.5) {
			this.health = this.health - demage;
		}
		console.log(this.health)
  }
}


const enemy = new Orc2(1000);
console.log(enemy)
const sword = new Sword2(5);
sword.strike(enemy)
sword.strike(enemy)
sword.strike(enemy)

// Патерн Builder и chaining

class Wallet {
  balance = 0;

  add(summ) {
    this.balance += summ;
    return this;
  }

  remove(summ) {
    this.balance -= summ;
    return this;
  }
}

const wallet = new Wallet();
const result = wallet.add(100).remove(20);
console.log(result);

class Builder {
  house = {};

  addRoof() {
    this.house.roof = 'Roof';
    return this;
  }

  addFloor() {
    this.house.floor = 'Floor';
    return this;
  }

  execute() {
    return this.house;
  }
}

const house = new Builder().addFloor().addRoof().execute();
console.log(house);

class Character {
  constructor(race, name, language) {
    this.race = race;
    this.name = name;
    this.language = language;
  }

  speak() {
    console.log(`I'm ${this.name} and I speak ${this.language}`)
  }
}

class Orc3 extends Character {
  constructor(race, name, language, weapons) {
    super(race, name, language);
    this.weapons = weapons;
  }

  attacK() {
    console.log(`I'am ${this.race} and I attack you whith ${this.weapons}!`);
  }

  speak() {
    console.log(`I'm Orc and I tell you go away!`);
  }
}

class Elf extends Character {
  #spellType
  constructor(race, name, language, spell) {
    super(race, name, language);
    this.spell = spell;
    this.#spellType = 'elf spell';
  }

  conjure() {
    console.log(`${this.spell} ---- I elf and I conjure with ${this.#spellType}`);
  }

  speak() {
    console.log(`I'm Elf and I spell you!`);
  }
}

const orc3 = new Orc3('Orc', 'Jonh', 'tha-ba-tha-ba', 'Axe');
console.log(orc3);
console.log(orc3.speak());
console.log(orc3.attacK());
const elf = new Elf('Elf', 'Helen', 'elfian', 'whab-ba-da-ba-du');
console.log(elf);
console.log(elf.speak());
console.log(elf.conjure());