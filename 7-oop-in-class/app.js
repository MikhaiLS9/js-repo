class Person {
  constructor(race, name, lang) {
    this.race = race;
    this.name = name;
    this.lang = lang;
  }

  speak() {
    console.log(`${this.name} : ${this.lang}`);
  }
}

class Orc extends Person {
  weapon = "Топором";
  constructor(race, name, lang) {
    super(race, name, lang);
  }

  speak() {
    console.log(`${this.name} : ${this.lang}`);
  }

  punch() {
    console.log(`${this.name} |наносит урон| => ${this.weapon}`);
  }
}

class Elf extends Person {
  spell = "Oгненный шар";
  constructor(race, name, lang) {
    super(race, name, lang);
  }

  speak() {
    console.log(`${this.name} : ${this.lang}`);
  }

  createspell() {
    console.log(`${this.name} |создает заклинание| => ${this.spell}`);
  }
}

const person = new Person();
const orc = new Orc("Орк", "Тралл", "Лок Тар'огар");
const elf = new Elf("Эльф", "Иллидан", "В атаку!");

orc.speak();
orc.punch();

elf.speak();
elf.createspell();
