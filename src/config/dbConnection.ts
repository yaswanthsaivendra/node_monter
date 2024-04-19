import mongoose from 'mongoose';

const connectDb = async () => {
    try {
        const connectionString = process.env.CONNECTION_STRING;
        if (!connectionString) {
            throw new Error("Connection string is not defined in env vars");
        }
        const connect = await mongoose.connect(connectionString);
        console.log(
            "Database connected: ",
            connect.connection.host,
            connect.connection.name,
        )
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }
}


export default connectDb;