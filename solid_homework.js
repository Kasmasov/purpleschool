class Billing {

	constructor(amount) {
    this.amount = amount;
	}

	calculateTotal(ratio) {
    return this.amount * ratio.value;
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