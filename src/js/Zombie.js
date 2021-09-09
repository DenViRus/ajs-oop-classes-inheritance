import Character from './Character.js';

export default class Zombie extends Character {
  constructor(name, type) {
    super(name, type);

    this.attack = 10;
    this.defence = 40;
  }
}

const zombie1 = new Zombie('Scum', 'Zombie');

console.log(zombie1);
