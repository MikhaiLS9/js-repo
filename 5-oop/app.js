function Person(race, name, lang) {
  this.race = race;
  this.name = name;
  this.lang = lang;
}

Person.prototype.speak = function () {
  console.log(`${this.name} : ${this.lang}`);
};

Orc.prototype = Object.create(Person.prototype);
Elf.prototype = Object.create(Person.prototype);

function Orc(race, name, lang) {
  this.race = race;
  this.name = name;
  this.lang = lang;

  this.weapon = "Топором";
}

Orc.prototype.punch = function () {
  console.log(`${this.name} |наносит урон| => ${this.weapon}`);
};

function Elf(race, name, lang) {
  this.race = race;
  this.name = name;
  this.lang = lang;

  this.spell = "Огненный шар";
}

Elf.prototype.createspell = function () {
  console.log(`${this.name} |создает заклинание| => ${this.spell}`);
};

const person = new Person();
const orc = new Orc("Орк", "Тралл", "Лок Тар'огар");
const elf = new Elf("Эльф", "Иллидан", "В атаку!");

orc.speak();
orc.punch();

elf.speak();
elf.createspell();
