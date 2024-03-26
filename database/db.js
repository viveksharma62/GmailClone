import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD; 

const Connection = () => {
    const DB_URI =`mongodb://${USERNAME}:${PASSWORD}@ac-d1pb1jk-shard-00-00.dixtcfd.mongodb.net:27017,ac-d1pb1jk-shard-00-01.dixtcfd.mongodb.net:27017,ac-d1pb1jk-shard-00-02.dixtcfd.mongodb.net:27017/?ssl=true&replicaSet=atlas-kwinfx-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0`;
    try {
        mongoose.connect(DB_URI, { useNewUrlParser: true });
        mongoose.set('strictQuery', false);
        console.log('Database connected sucessfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error.message)
    }
}

export default Connection;