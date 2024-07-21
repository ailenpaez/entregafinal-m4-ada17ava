import * as net from "net";
import { PORT } from "./constants"; 

const client = net.createConnection({ port: PORT });

client.on("connect", () => {
  // const messageC = { path: "Characters" };
  // const messageC = { path: "Continents" };
  // const messageC = { path: "Character/4" }; 
  // const messageC = { path: "Continent/3" }; 

  const response = JSON.stringify(messageC);
  client.write(response);
});

client.on("data", (serverMsg) => {
  const messageS = serverMsg.toString(); 
  const parsedMessage = JSON.parse(messageS);
  console.log(parsedMessage);
  client.end();
});
