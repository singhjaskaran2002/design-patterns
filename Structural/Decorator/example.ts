interface Pizza {
    getDescription(): string;
    getCost(): number;
}

class PlainPizza implements Pizza {
    getDescription() {
        return "Plain pizza";
    }

    getCost() {
        return 10.0;
    }
}

abstract class ToppingDecorator implements Pizza {
    protected pizza: Pizza;

    constructor(pizza: Pizza) {
        this.pizza = pizza;
    }

    abstract getDescription(): string;
    abstract getCost(): number;
}

class Cheese extends ToppingDecorator { 
    constructor(pizza: Pizza) {
        super(pizza);
    }

    getDescription() {
        return this.pizza.getDescription() + ", cheese";
    }

    getCost() {
        return this.pizza.getCost() + 2.0;
    }
}

class Pepperoni extends ToppingDecorator {
    constructor(pizza: Pizza) {
        super(pizza);
    }

    getDescription() {
        return this.pizza.getDescription() + ", pepperoni";
    }

    getCost() {
        return this.pizza.getCost() + 3.0;
    }
}

// Example usage:
let myPizza: Pizza = new PlainPizza();
console.log("Plain Pizza: ", {cost: myPizza.getCost(), description: myPizza.getDescription()});

myPizza = new Cheese(myPizza); // add cheese topping
console.log("Pizza with Cheese: ", {cost: myPizza.getCost(), description: myPizza.getDescription()});

myPizza = new Pepperoni(myPizza); // add pepperoni topping
console.log("Pizza with Pepperoni and cheese: ", {cost: myPizza.getCost(), description: myPizza.getDescription()});

/**
    OUTPUT:
    
    Plain Pizza:  { cost: 10, description: 'Plain pizza' }
    Pizza with Cheese:  { cost: 12, description: 'Plain pizza, cheese' }
    Pizza with Pepperoni and cheese:  { cost: 15, description: 'Plain pizza, cheese, pepperoni' }
 */