## Builder Pattern

**Builder** is a creational design pattern that lets you construct complex objects step by step. The pattern allows you to produce different types and representations of an object using the same construction code.

Another definition of Builder Pattern is a separation of the construction of a complex object from its representation. A Builder class builds the final object step by step. This way, the Builder is independent of other objects.

##### For example

From this code:
```
const myHouse = new House(‘John Street 14’, 4, true, true);
```

to this: 
```
const myHouse = new HouseBuilder(‘John Street 14’)
 .setFloor(4)
 .makeParking()
 .makeGarden()
 .build(); 
```

##### When to use ?

- When it’s necessary to use a constructor with a long parameter list or when there’s a long list of constructors with different parameters.
- When it’s necessary to build different representations of the same object. That is, when objects of the same class with different characteristics are needed.