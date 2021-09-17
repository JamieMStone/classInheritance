const Animal = require("./animal");

class Dog extends Animal{
    constructor(name, lifespan, size, breed, colour){
        super(name, "dog", "mammals", lifespan, size);
        this.breed = breed;
        this.colour = colour;
    }

    dogInfo(){
        console.log(`${this.name} is a ${this.breed} that can live for up to ${this.lifespan} years`);
    }
}

const Spot = new Dog("Spot", "10", "Small", "Labrador", "White");

Spot.dogInfo();
Spot.animalInfo();
