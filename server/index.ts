import express from "express";
import http from "http";
import { Server } from "socket.io";
import { EventPayload, EventTypes } from "./types";

// Server setup

const httpServer = http.createServer(express());

const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});

// Event handlers

io.on("connection", (socket) => {
  socket.onAny((event: EventTypes, data: EventPayload) => {
    console.log(`Event: ${event}, payload: ${data}`);
  });

  socket.on("disconnect", (reason) => {
    console.log("user disconnected", reason);
  });
});

// Start the server

const port = 3000;
httpServer.listen(port, () => {
  console.log(`listening on port ${port}`);
});
