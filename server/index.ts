import express from "express";
import { Server } from "socket.io";

// Server setup

const app = express();
const httpServer = require("http").createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});

// Event handlers

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.onAny((event, data: any) => {
    console.log(`Event: ${event}, payload: ${data}`);
  });
});

// Start the server

const port = 3000;
httpServer.listen(port, () => {
  console.log(`listening on port ${port}`);
});
