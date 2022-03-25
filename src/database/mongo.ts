import { connect, Mongoose } from "mongoose";
import dotenv from 'dotenv';


dotenv.config();

export const mongoConnect = async () => {
    if(process.env.NODE_ENV == "test"){
    try {
    console.log('conectando com o mongo');
    await connect(process.env.DATABASE_TEST as string);
    console.log(`conexão feita com o mongo ${process.env.DATABASE_TEST} teste`)
    } catch(error) {
    console.log('error mongo db connection:', error)
    }
} else {
    try {
    console.log('conectando com o mongo');
    await connect(process.env.DATABASE as string);
    console.log(`conexão feita com o mongo ${process.env.DATABASE} original`)
    } catch(error) {
    console.log('error mongo db connection:', error)
}
}
}