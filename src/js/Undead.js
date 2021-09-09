import Character from './Character.js';

export default class Undead extends Character {
  constructor(name, type) {
    super(name, type);

    this.attack = 25;
    this.defence = 25;
  }
}

const undead1 = new Undead('Rex', 'Undead');

console.log(undead1);
