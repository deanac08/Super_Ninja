class Ninja {
    constructor(name){
        this.name = name;
        this.health = 30;
        this.speed = 3;
        this.strength = 3;
    }

    sayName(){
        console.log(`My name is ${this.name}`);
        return this;
    }

    showStats(){
        console.log(`Name: ${this.name}`);
        console.log(`Strength: ${this.strength}`);
        console.log(`Speed: ${this.speed}`);
        console.log(`Health: ${this.health}`);
        return this;
    }

    drinkSake(){
        this.health += 10;
        return this;
    }
}

class Sensei extends Ninja{
    constructor(name){
        super(name);
        this.health = 200;
        this.speed = 10;
        this. strength = 10;
        this.wisdom = 10;
    }
    speakWisdom(){
        super.drinkSake();
        console.log("Tough times never last, only tough people last")
        return this;
    }
}

const superSensei = new Sensei("Steve");
superSensei.speakWisdom().showStats();

const ninja1 = new Ninja("Janet");
ninja1.drinkSake().showStats();

