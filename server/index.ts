import express from "express";
import http from "http";
import { Server } from "socket.io";
import { EventPayload, EventTypes } from "./types";
import { createRoom, getRooms } from "./handlers/RoomHandler";

// Server setup

const httpServer = http.createServer(express());

const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});

// Event handlers

io.on("connection", (socket) => {
  socket.onAny((event: `${EventTypes}`, data: EventPayload) => {
    console.log(`Event: ${event}, payload: ${JSON.stringify(data)}`);

    // TODO: Create channel and emit response

    switch (event) {
      case EventTypes.CreateRoom:
        createRoom(data.player);
        break;
      case EventTypes.GetRooms:
        console.log(JSON.stringify(getRooms()));
        break;
    }
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
