## Singleton Pattern

The Singleton design pattern is used to ensure that only a single instance of a class is created and provide a global point of access to that instance. This can be useful in situations where you need to limit the number of instances of a class that can be created or ensure that all objects in a system are working with the same instance of a class. It also helps to reduce memory usage and improve performance by preventing unnecessary object creation.

##### Usage of Singleton design pattern
You need to know that there are two common steps in every Singleton implementation.

- First step is to make the default constructor private, so it can prevent other objects from using the new operator with the Singleton class.
- Then implement a static creation method that acts as a constructor. Under the hood, this method calls the private constructor to create an object and saves it in a static field. So, whenever this method gets called, it will return the object.

##### Things to Keep in Mind:
- Singleton class must have a private constructer.
- Singleton class must contain a static instance of itself or public getter (in case of private instance).
- Singleton class must have a static method to access Its Instance globally.


