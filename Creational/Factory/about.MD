## Factory Pattern

it allows us to create objects by specifying their common interface at run time without imposing their concrete class creation logic.

##### When to use ?
- There should be a set of classes which implement a common interface,
- You don’t know which object to create,
- Object initialization is somewhat expensive (Have to do some operations in order to create an object)

Factory methods act as an actual factory. It creates our products which we request but we don’t need to be aware of how they are created.
