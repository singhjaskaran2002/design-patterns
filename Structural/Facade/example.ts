// Define classes for Battery, Ignition, Engine, and Car
class Battery {
    // Method to turn on the battery
    turnOn() {
        console.log('Battery turned on.');
    }

    // Method to turn off the battery
    turnOff() {
        console.log('Battery turned off.');
    }
}

class Ignition {
    // Method to start the ignition
    startIgnition() {
        console.log('Ignition ignited.');
    }

    // Method to stop the ignition
    stopIgnition() {
        console.log('Ignition stopped.');
    }
}

class Engine {
    // Method to start the engine
    start() {
        console.log('Engine started.');
    }

    // Method to stop the engine
    stop() {
        console.log('Engine stopped.');
    }
}

class Car {
    // Private properties for the car's battery, ignition, and engine
    private battery: Battery;
    private ignition: Ignition;
    private engine: Engine;

    // Constructor to create a new instance of the car with a new battery, ignition, and engine
    constructor() {
        this.engine = new Engine();
        this.ignition = new Ignition();
        this.battery = new Battery();
    }

    // Method to start the car
    startCar() {
        this.battery.turnOn();
        this.ignition.startIgnition();
        this.engine.start();
        console.log('Car started!')
    }

    // Method to stop the car
    stopCar() {
        this.engine.stop();
        this.ignition.stopIgnition();
        this.battery.turnOff();
        console.log('Car stopped!')
    }
}

// Create a new instance of the car
const car = new Car();

// Start and stop the car
car.startCar();
car.stopCar();
