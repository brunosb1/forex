import request from 'supertest'
import app from '../../server';
import mongoose from 'mongoose'
import Transactions from "../Models/transaction";

describe('test API my routes', ()=>{

beforeAll(async () => {
if (!process.env.DATABASE_TEST) {
throw new Error("Mongo has not been connected");
} else {
await mongoose.connect(process.env.DATABASE_TEST);
}});

afterAll(async () => {
await mongoose.connection.close();
});



    it('should be return pong', (done)=>{
    request(app)
    .get('/api/ping')
    .then(response =>{
    expect(response.body.pong).toBeTruthy();
    return done();
            });
        });

        
    it('should be add', (done)=>{
        jest.setTimeout(50000)
        request(app)
        .post('/api/transaction')
        .send('from=GBP&to=USD&valueFrom=40&valueTo=10')
        .then(response =>{
        expect(response.body).toBeTruthy();
        return done();
            });
        });

        it('should not be add', (done)=>{
        jest.setTimeout(50000)
        request(app)
        .post('/api/transaction')
        .send('')
        .then(response =>{
        expect(response.body.error).not.toBeUndefined();
        return done();
        });
        });

        it('should list all transactions', (done)=>{
        request(app)
        .get('/api/transaction')
        .then(response =>{
        expect(response.body.error).toBeUndefined();
        expect(response.body.transactions.length).toBeGreaterThanOrEqual(1);
        expect(response.body.transactions).toBeDefined()
        return done();
            });
        });
});