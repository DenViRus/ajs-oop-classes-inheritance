import Character from './Character.js';

export default class Magician extends Character {
  constructor(name, type) {
    super(name, type);

    this.attack = 10;
    this.defence = 40;
  }
}

const magician1 = new Magician('Merlin', 'Magician');

console.log(magician1);
