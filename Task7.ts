class Car{
    constructor(protected carBrand : string, protected engineType : string, private doorQuantity? : number, private wheelSide? : string){ //doorQuantity and wheelSide are for the task 3

    }
    carDoorsWheel () {
        console.log(`This car has ${this.doorQuantity} doors and this is ${this.wheelSide} drive car`);
    }
}

class SportCar extends Car{
    constructor(carBrand : string, engineType : string, private maximumSpeed : number, private carCost : number){
        super(carBrand, engineType);
    }

    carInfo () {
        console.log(`This is ${this.carBrand}. It has ${this.engineType} engine and max speed equal to ${this.maximumSpeed}. 
        Approximetly cost of the car is ${this.carCost}`);
    }
}

class LuxuryCar extends Car{ ///Why should we have 2 separate child classed with same properties???
    constructor(carBrand : string, engineType : string, private maximumSpeed : number, private carCost : number){
        super(carBrand, engineType);
    }

    carInfo () {
        console.log(`This is ${this.carBrand}. It has ${this.engineType} engine and max speed equal to ${this.maximumSpeed}. 
        Approximetly cost of the car is ${this.carCost}`);
    }
}

/// Task 1
const car1_1 = new SportCar('Ferrari', 'ESS', 300, 100000);
car1_1.carInfo();

const car1_2 = new LuxuryCar('Zeekr', 'PHEV', 200, 50000);
car1_2.carInfo();

/// Task 3 (parent class for Task 1 extended and used)

const car3 = new Car('Chepuha', "Absence", 3, "middle-side");
car3.carDoorsWheel();

///Task 2

class People{
    constructor(private name : string){

    }

    displayName () {
        console.log(`My name is ${this.name}`);
    }
}

const alesha = new People("Alesha");
const vasya = new People("Vasya");

alesha.displayName();
vasya.displayName();