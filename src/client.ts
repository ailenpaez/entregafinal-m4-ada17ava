import * as net from "net";
import { PORT } from "./constants";

const client = net.createConnection({ port: PORT });

client.on("connect", () => {
  const messageC = "hola cliente"; //{path:"characters"}

  const response = JSON.stringify(messageC);
  client.write(response);
});

client.on("data", (serverMsg: string) => {
  const messageS = serverMsg.toString();
  const parsedMessage = JSON.parse(messageS);
  console.log(parsedMessage);
});
