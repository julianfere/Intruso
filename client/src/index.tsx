import React from "react";
import ReactDOM from "react-dom/client";
import { io } from "socket.io-client";

const socket = io("localhost:3000");

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const emitEvent = (event: string, data: any) => {
  console.log("Emiting Event");
  socket.emit(event, data);
};

root.render(
  <React.StrictMode>
    <button onClick={() => emitEvent("test", "test")}>Test</button>
    <button onClick={() => emitEvent("test1", "test1")}>Test</button>
    <button onClick={() => emitEvent("test2", "test2")}>Test</button>
  </React.StrictMode>
);
