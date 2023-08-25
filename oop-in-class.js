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
