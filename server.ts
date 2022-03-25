import express from "express";
import { Server } from "socket.io";
import cors from "cors";
import http from "http";
import dotenv from "dotenv";
import { router } from "./src/routes/routes";
import axios from "axios";
import { mongoConnect } from "./src/database/mongo";

dotenv.config();
mongoConnect();
const app = express();
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
  origin: "*",
  methods: ["GET", "POST"],
  },
});



let interval: any;

io.on("connection", (socket) => {
  console.log(`new user ${socket.id}`);

let intevarl = setInterval(async () => {
const { data } = await axios("https://api.fastforex.io/fetch-all?api_key=cd38755958-57d3db0724-r925xg");
io.emit("send-data", data.results);
  
  }, 1000);
clearInterval(interval);

interval = setInterval(() => socket, 1000);
socket.on("disconnect", () => {
console.log(`client was disconnected ${socket.id}`);
clearInterval(interval);
  });
});



app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

 server.listen(process.env.PORT, () =>
 console.log(`Listening on port ${process.env.PORT}`)
 );


export default server;
export { io };