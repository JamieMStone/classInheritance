class Animal{
    constructor(name, species, type, lifespan, size){
        this.name = name;
        this.species = species;
        this.type = type;
        this.lifespan = lifespan;
        this.size = size;
    }

    animalInfo(){
        console.log(`${this.name} is a ${this.size} ${this.species} that can live for up to ${this.lifespan} years.  ${this.species[0].toUpperCase()+this.species.substring(1)}s are ${this.type}.`);
    }
}

module.exports = Animal;