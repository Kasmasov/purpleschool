class Billing {

	constructor(amount) {
    this.amount = amount;
	}

	calculateTotal(ratio) {
    return this.amount * ratio.value;
	}
}

class Billing2 {

	constructor(amount) {
    this.amount = amount;
	}

	calculateTotal() {
    return this.amount
	}
}

class FixBilling {
  value = 1;
}

class HourBilling {
	constructor(hour) {
	this.value = hour;
	}
}

class ItemBilling {
	constructor(item) {
		this.value = item;
	}
}

const bill = new Billing(40)
const fix = new FixBilling()
const hour = new HourBilling(20)
const item = new ItemBilling(30)
console.log('bill', bill.calculateTotal(fix));
console.log('hour', bill.calculateTotal(hour));
console.log('item', bill.calculateTotal(item));


class Ratio {
	constructor(value) {
    this.value = value;
	}
}

const fixBilling = new Ratio(1);
const hourRatio = new Ratio(50);
const itemRatio = new Ratio(100);
console.log('fixBilling', bill.calculateTotal(fixBilling));
console.log('hourBilling', bill.calculateTotal(itemRatio));

class HourBilling2 extends Billing2 {
  constructor(amount, value) {
    super(amount);
	  this.value = value;
  }

  calculateTotal(value) {
	  return super.calculateTotal() * value;
  }
}

const hour2 = new HourBilling2(1000);
console.log('hour2', hour2.calculateTotal(1000))
console.log('hour2.amount', hour2.amount)