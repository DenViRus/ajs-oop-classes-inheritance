import Character from './Character.js';

export default class Swordsman extends Character {
  constructor(name, type) {
    super(name, type);

    this.attack = 40;
    this.defence = 10;
  }
}

const swordsman1 = new Swordsman('Scott', 'Swordsman');

console.log(swordsman1);
