class Billing {

	constructor(amount) {
    this.amount = amount;
	}

	calculateTotal(k) {
    return this.amount * k;
	}
}

class FixBilling extends Billing {
  constructor(amount) {
    super(amount);
	}

	calculateTotal() {
		return this.amount;
	}
}

class HourBilling extends Billing {
	constructor(amount) {
    super(amount);
	}
}

class ItemBilling extends Billing {
	constructor(amount) {
		super(amount);
	}
}

const bill = new Billing(20)
const fix = new FixBilling(100)
const hour = new HourBilling(20)
const item = new ItemBilling(30)
console.log('bill', bill.calculateTotal(1));
console.log('fix', fix.calculateTotal());
console.log('hour', hour.calculateTotal(100));
console.log(item.calculateTotal(20));