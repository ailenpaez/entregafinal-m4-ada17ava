import { PORT } from "./constants";
import { endpoint } from "./app";
import * as net from "net";

const server = net.createServer();

server.on("connection", (socket) => {
  socket.on("data", async (sMessage) => {
    const response = await endpoint(sMessage);
    socket.write(response);
  });
});

server.listen(PORT, () => console.log("SERVER LISTEN ON PORT -> " + PORT));
