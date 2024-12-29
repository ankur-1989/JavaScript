//
// This is only a SKELETON file for the 'DnD Character' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const abilityModifier = (c) => {
  if (c < 3) {
    throw new Error("Ability scores must be at least 3");
  } else if (c > 18) {
    throw new Error("Ability scores can be at most 18");
  } else {
    return Math.floor((c - 10) / 2);
  }
};

export class Character {
  static rollAbility() {
    let l = [];
    for (let i = 0; i < 4; i++) {
      l.push(Math.floor(Math.random() * 6 + 1));
    }
    return l
      .sort((a, b) => a - b)
      .slice(1)
      .reduce((a, b) => a + b);
  }

  constructor() {
    this.strength = Character.rollAbility();
    this.dexterity = Character.rollAbility();
    this.constitution = Character.rollAbility();
    this.intelligence = Character.rollAbility();
    this.wisdom = Character.rollAbility();
    this.charisma = Character.rollAbility();
    this.hitpoints = 10 + abilityModifier(this.constitution);
  }
}
