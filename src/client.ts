import * as net from "net";
import { PORT } from "./constants"; // acá tambien se consume la api

const client = net.createConnection({ port: PORT });

client.on("connect", () => {
  // const messageC = {path: "books"}; //^ MODIFICAR
  // const messageC = {path: "characters"}; //! NO ARRANCA
  // const messageC = { path: "spells" };
  const messageC = {path: "movies"};

  const response = JSON.stringify(messageC);
  client.write(response);
});

client.on("data", (serverMsg) => {
  const messageS = serverMsg.toString(); //.toString();
  const parsedMessage = JSON.parse(messageS);
  console.log(parsedMessage);
  client.end();
});
