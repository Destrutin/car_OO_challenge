// Part One

class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk() {
        return "Beep.";
    }
    toString() {
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`;
    }
}

// Part Two

class Car extends Vehicle{
    constructor(make, model, year) {
        super();
        this.numWheels = 4;
    }
}

// Part Three

class Motorcycle extends Vehicle{
    constructor(make, model, year) {
        super();
        this.numWheels = 2;
    }
    revEngine() {
        return "VROOM!!!";
    }
}

// Part Four

class Garage {
    constructor(capacity) {
        this.vehicles = [];
        this.capacity = capacity;
    }
    add(newVehicle) {
        if(!(newVehicle instanceof Vehicle)) {
            return "Only vehicles are allowed in here!";
        }
        // If the item attempting to be added does not fit into the guidelines of being a vehicle, reject it.
        if(this.vehicles.length >= this.capacity) {
            return "Sorry, we're full.";
        }
        this.vehicles.push(newVehicleehicle);
        return "Vehicle added!";
    }
}