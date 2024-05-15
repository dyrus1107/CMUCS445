import app from "./app.js";
import "./database.js";
import { PORT } from "./config.js";
import "./libs/initialSetup.js";
import { Server } from "socket.io";
import { createServer } from "http";
import { producer } from "./kafka/producer.js";
import { getData } from "./libs/utils.js";
import { startConsumer } from "./kafka/consumer.js";
import { deleteEmployeeById } from "./controllers/employee.controller.js";

const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*", // Allow all origins
    methods: ["GET", "POST"],
  },
});

io.on("connection", socket => {
  console.log("a user connected to sip-cs");
  io.emit("connection", "user connected");
  socket.on("getMsg", msg => {
    io.emit("getMsg", "message received");
  });

  
  socket.on("delete", msg => {
    producer.send({
      topic: "hr",
      messages: [{ value: JSON.stringify({ _id: msg, method: "delete" }) }],
    });
    producer.send({
      topic: "dashboard",
      messages: [{ value: JSON.stringify({ _id: msg, method: "delete" }) }],
    });
    deleteEmployeeById(msg);
    io.emit("delete", console.log(msg));
  });
  socket.on("add", msg => {
    const data = getData(msg);
    // console.log(data);
    producer.send({
      topic: "hr",
      messages: [{ value: JSON.stringify({ data, method: "create" }) }],
    });
  });
});

startConsumer(io);

server.listen(PORT);
console.log("Server on port", app.get("port"));
