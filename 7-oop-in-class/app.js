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
  constructor(race, name, lang,weapon) {
    super(race, name, lang);
    this.weapon = weapon
  }

  punch() {
    console.log(`${this.name} |наносит урон| => ${this.weapon}`);
  }
}

class Elf extends Person {
  constructor(race, name, lang,spell) {
    super(race, name, lang);
    this.spell = spell
  }

  createspell() {
    console.log(`${this.name} |создает заклинание| => ${this.spell}`);
  }
}

const person = new Person();
const orc = new Orc("Орк", "Тралл", "Лок Тар'огар", 'Топором');
const elf = new Elf("Эльф", "Иллидан", "В атаку!","Oгненный шар");

orc.speak();
orc.punch();

elf.speak();
elf.createspell();
