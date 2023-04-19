//target (our sql object interface)
interface ISql {
    fetchUser: Function;
}
class SqlQuery implements ISql {
    fetchUser() {
        console.log(`SQL: fetchUser called!`);
    }
}

//adaptee
interface IMongo {
    findUser: Function; //abstract away in the adapter
}
class MongoQuery implements IMongo {
    findUser() {
        console.log(`MONGO: findUser called!`);
    }
}

enum DatabaseType {
    Mongo,
    Sql
}

//adapter
class QueryAdapter implements ISql {
    constructor(public type: DatabaseType) { }

    public fetchUser() {
        switch (this.type) {
            case DatabaseType.Mongo:
                new MongoQuery().findUser();
                break;
            case DatabaseType.Sql:
                new SqlQuery().fetchUser();
                break;
            default:
                throw new Error("Invalid Query Type");
        }
    }
}

//client
const query1: ISql = new QueryAdapter(DatabaseType.Sql);
query1.fetchUser();

const query2: ISql = new QueryAdapter(DatabaseType.Mongo);
query2.fetchUser();
