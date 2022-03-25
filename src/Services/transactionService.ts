import Transaction from '../Models/transaction';
import * as transactionController from '../Controllers/transactionController';


export const createTransaction = async (from: string, to: string, valueFrom: number, valueTo: number) => {
    const info = new Transaction({from, to, valueFrom, valueTo})
    return await info.save();
    
    
}

export const getAll = async () => {
    return await Transaction.find()
}