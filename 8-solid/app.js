class Biling {
  amount = 5;
  calculateTotal() {}
}

class FixBiling extends Biling {
  calculateTotal() {
    return this.amount;
  }
}

class HourBiling extends Biling {
  calculateTotal(hours) {
    return this.amount * hours;
  }
}

class ItemBiling extends Biling {
  calculateTotal(el) {
    return this.amount * el.length;
  }
}

const fixBiling = new FixBiling();
const hourBiling = new HourBiling();
const itemBiling = new ItemBiling();
console.log(fixBiling.calculateTotal());
console.log(hourBiling.calculateTotal(new Date().getHours()));
console.log(itemBiling.calculateTotal([1, 2, 3, 4, 5]));
