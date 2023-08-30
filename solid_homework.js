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