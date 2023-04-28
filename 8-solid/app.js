class Billing {
  amount = 5;
  calculateTotal() {}
}

class FixBiling extends Billing {
  calculateTotal() {
    return this.amount;
  }
}

class HourBilling extends Billing {
  calculateTotal(hours) {
    return this.amount * hours;
  }
}

class ItemBilling extends Billing {
  calculateTotal(el) {
    return this.amount * el.length;
  }
}

const fixBilling = new FixBiling();
const hourBilling = new HourBilling();
const itemBilling = new ItemBilling();
console.log(fixBilling.calculateTotal());
console.log(hourBilling.calculateTotal(new Date().getHours()));
console.log(itemBilling.calculateTotal([1, 2, 3, 4, 5]));
