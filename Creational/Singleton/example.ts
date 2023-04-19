class Socket {
    private static instance: Socket;
    private readonly connectionId: string;

    private constructor() {
        this.connectionId = crypto.randomUUID();
    }

    // Define a static method to get the instance of the Socket class
    public static getInstance(): Socket {
        // If the instance variable is not defined, create a new Socket instance
        if (!Socket.instance) {
            Socket.instance = new Socket();
        }
        // Return the instance variable
        return Socket.instance;
    }

    // Define a public method to get the current connection ID
    public getCurrentConnection(): string {
        // Return the connectionId
        return this.connectionId;
    }
}

// Create three instances of the Socket class using the getInstance() method
const instance1 = Socket.getInstance();
const instance2 = Socket.getInstance();
const instance3 = Socket.getInstance();

// Log the connection ID of each instance to the console
// every time it returns same connection ID
console.log('instance1 connection: ', instance1.getCurrentConnection());
console.log('instance2 connection: ', instance2.getCurrentConnection());
console.log('instance3 connection: ', instance3.getCurrentConnection());