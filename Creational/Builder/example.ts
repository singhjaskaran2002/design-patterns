// Define a QueryBuilder class that implements the builder pattern
class SelectQueryBuilder {
    // Private fields for storing SELECT, FROM, and WHERE clauses
    private selectFields: string[] = [];
    private fromTables: string[] = [];
    private whereConditions: string[] = [];
    private queryString = "";

    // Method for specifying SELECT fields
    select(...fields: string[]): SelectQueryBuilder {
        this.selectFields.push(...fields);
        return this;
    }

    // Method for specifying FROM tables
    from(...tables: string[]): SelectQueryBuilder {
        this.fromTables.push(...tables);
        return this;
    }

    // Method for specifying WHERE conditions
    where(condition: string): SelectQueryBuilder {
        this.whereConditions.push(condition);
        return this;
    }

    // Method for building the query and returning the builder object
    buildQuery(): SelectQueryBuilder {
        const select = this.selectFields.join(", ");
        const from = this.fromTables.join(", ");
        const where = this.whereConditions.join(" AND ");
        this.queryString = `SELECT ${select} FROM ${from} WHERE ${where}`;
        return this;
    }

    get query() {
        return this.queryString;
    }
}

// Define a QueryRunner class that takes a SelectQueryBuilder object as a parameter
class QueryRunner {
    constructor(public builder: SelectQueryBuilder) { }

    // Method for executing the query and returning the result
    execute() {
        return {
            query: this.builder.query,
            message: "Query has been executed successfully!",
            error: null
        }
    }
}

// Example usage
// Create a new SelectQueryBuilder object and specify SELECT, FROM, and WHERE clauses
const query = new SelectQueryBuilder()
    .select("id", "name", "email")
    .from("users")
    .where("email = 'jaskaran@gmail.com'")
    // Call the buildQuery() method to build the query and return the builder object
    .buildQuery();

// Create a new QueryRunner object with the SelectQueryBuilder object as a parameter
const runner = new QueryRunner(query);

// Execute the query and log the result to the console
console.log(runner.execute());
