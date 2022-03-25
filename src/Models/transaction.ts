import mongoose from "mongoose";
import {Schema, Model, model, Document} from 'mongoose';

interface ITransaction extends Document {
    from: string;
    to: string;
    valueFrom: number,
    valueTo: number
}

const transactionSchema = new Schema({
    from: {
        type: String,
        maxlength: 3
      
    },
    to: {
        type: String,
        maxlength: 3
    },
    valueFrom: {
        type: Number,
     
    },
    valueTo: {
        type: Number,
     
    }

})

export default model<ITransaction>('Transaction', transactionSchema);