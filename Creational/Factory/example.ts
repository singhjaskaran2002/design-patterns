/**
 * Enum to represent the available databases - SQL and MongoDB
 */
enum Databases {
    sql = "sql",
    mongo = "mongo"
}

/**
 * Interface for the Database class with two methods - findOne and create
 */
interface IDatabase {
    findOne: Function;
    create: Function;
}

// Classes for all the databases implementing the IDatabase interface
// Contains the implementation of the findOne and create methods

/**
 * Class for the MongoDB database
 */
class Mongo implements IDatabase {
    findOne() { return "MONGO: findOne method called." }
    create() { return "MONGO: create method called." }
}

/**
 * Class for the SQL database 
 */
class Sql implements IDatabase {
    findOne() { return "SQL: findOne method called." }
    create() { return "SQL: create method called." }
}

/**
 * Class for the connection factory that creates a connection to the specified database
 * Contains a static method createConnection that takes in a database string, and
 * Returns a new instance of either the Sql or Mongo class based on the provided database type
 * Throws an error if an invalid database type is provided
 */
class connectionFactory {
    static createConnection(database: string) {
        switch (database) {
            case Databases.sql:
                return new Sql()
            case Databases.mongo:
                return new Mongo()
            default:
                throw new Error("Invalid database!")
        }
    }
}

/**
 * Creates a new connection to the MongoDB database using the connectionFactory class
 * Calls the findOne method on the connection and logs the output to the console
*/
const connection = connectionFactory.createConnection(Databases.mongo);
console.log(connection.findOne()); // output: "MONGO: findOne method called." 