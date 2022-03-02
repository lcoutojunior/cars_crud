import mongoose from "mongoose";
import { config } from "../config";

const options = { 
    user: config.databaseUser, 
    pass: config.databasePassword, 
    dbName: config.databaseName, 
    keepAlive: true, 
    keepAliveInitialDelay: 300000
}

export const startDB = async function start() {
    try {
        
        mongoose.connection.on('connecting', fn => {
            console.log("Trying to connecting db...");
        });
        
        mongoose.connect(`mongodb://${config.databaseHost}:${config.databasePort}/`, options);
        
        mongoose.connection.on('connected', fn => {
            console.log(`Database Connected on port: ${config.databasePort}`);
        });
        
        mongoose.connection.on('error', err => {
            throw(err);
        });
        
    } catch (err) {
        console.error(err);
    }
}

export const database = mongoose;
