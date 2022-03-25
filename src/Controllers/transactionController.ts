import { Request, Response } from "express";
import { io } from "../../server";

import * as transactionService from '../Services/transactionService'



export const getTransaction = async (req: Request, res: Response) => {
    let transactions = await transactionService.getAll()
        res.status(200).json({  transactions    })
}

export const addTransaction = async (req: Request, res: Response) => {
    if(req.body.from && req.body.to && req.body.valueFrom && req.body.valueTo ){ 
    let {from, to, valueFrom, valueTo} = req.body
    if(req.body.from.length >= 4) {
        return res.status(405).json({ error:'currencie is not exists'})
    } else {
    const info = await transactionService.createTransaction(from, to, valueFrom, valueTo)
    res.status(201)
    return res.send({  info  })
    }
    } else {
        res.status(400).json({ error: 'Send all datas' })
    }
            
    
    
}