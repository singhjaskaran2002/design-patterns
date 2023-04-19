// Define an interface IPrototype with properties and a clone method
interface IPrototype {
    name: string;
    organization: string;
    profession: string;
    clone(): IPrototype;
}

// Define a Person class that implements the IPrototype interface
class Person implements IPrototype {
    constructor(
        public name: string,
        public organization: string,
        public profession: string
    ) {}

    // Method for cloning the object and returning a new instance
    clone(): IPrototype {
        return new Person(this.name, this.organization, this.profession);
    }
}

// Create a basePerson object with initial values
const basePerson = new Person("base_name", "base_org", "base_profession");

// Clone the basePerson object to create a newPerson object with updated name
const newPerson = basePerson.clone();
newPerson.name = "new_name";

// Log both the basePerson and newPerson objects to the console
console.log("BASE PERSON: ", basePerson)
console.log("NEW PERSON: ", newPerson)

// Check if the newPerson object and the basePerson object are equal or not
console.log(newPerson === basePerson) // Output: false