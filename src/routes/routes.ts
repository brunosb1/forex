import { Express } from 'express';
import {Router, Request, Response} from 'express'
import * as transactionController from '../Controllers/transactionController'

export const router = Router()

//ROUTE TEST
router.get('/api/ping', (req: Request, res: Response)=>{
        res.json({ pong: true })
});

// API ROUTES ABOUT TRANSACTIONS
router.get('/api/transaction', transactionController.getTransaction);
router.post('/api/transaction', transactionController.addTransaction);
