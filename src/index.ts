import { HPModel } from "./model/model";
import { PORT } from "./constants";

import * as net from "net";

const server = net.createServer();

server.on("connection", (socket) => {
  socket.on("data", async (sMessage) => {
    const response = await sMessage;
    socket.write(response);
  });
});

server.listen(PORT, () => console.log("SERVER LISTEN ON PORT -> " + PORT));
