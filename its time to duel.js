

class EffectCard extends UnitCard {
    constuctor(name, cost, stat, magnitude) {
        this.name = name;
        this.cost = cost;
        this.stat = stat
        this.magnitude = magnitude
    }
    attack(target) {
        if (target instanceof UnitCard) {
            this.effect = this.cost, this.stat, this.magintude
            console.log(`${UnitCard.name}Used ${EffectCard.name}, Dealing ${this.power} Damage. with at Magnitude of ${this.magnitude} at a cost of ${this.endurance} endurance.`)
        } else {
            throw new Error("Target must be a unit!");
        }
    }
}

hardalgo = new EffectCard("Hard Algorithm", -2, this.resilience + 3, 2);


class UnitCard {
    constructor(name, cost, power, resilience, endurance) {
        this.name = name
        this.cost = cost
        this.power = power
        this.resilience = resilience
        this.endurance = endurance

    }
}
var red = new UnitCard("Red Ninja", 2, 200, 100)
var black = new UnitCard("black Ninja", 2, 200, 100)
red.attack(black)
// console.log(hardalgo);
