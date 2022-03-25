import Transactions from "../Models/transaction";
import { getAll, createTransaction } from "./transactionService";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

describe("MongoDB service", () => {
  let from = "USD";
  let to = "GBP";
  let valueFrom: number;
  let valueTo: number;

beforeAll(async () => {
    if (!process.env.DATABASE_TEST) {
      throw new Error("Mongo has not been connected");
    } else {
      await mongoose.connect(process.env.DATABASE_TEST);
    }
  });
afterAll(async () => {
    await mongoose.connection.close();
  });
 //afterEach(async()=>{
    //await Transactions.deleteMany({})
//})

  describe("Transaction", () => {
    test("Add new transaction", async () => {
      await createTransaction(from, to, 50, 70);
      let projects = await getAll();
      expect(projects.length).toBeGreaterThan(1);
    });
  });
  describe("getAll list", () => {
    test("get all transactions", async () => {
      let get = await getAll();
      expect(get.length).toBeGreaterThanOrEqual(1);
    });
  });
});

