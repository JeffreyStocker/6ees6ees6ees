class ForagerBee extends Bee {
  constructor() {
    super();
    this.age = 10;
    this.job = 'find pollen';
    this.treasureChest = [];
    this.canFly = true;
  }
  forage (treasure){
    this.treasureChest.push (treasure);
  }
  // TODO..
};
