import * as net from "net";
import { PORT } from "./constants"; // acá tambien se consume la api
import path from "path";

const client = net.createConnection({ port: PORT });

client.on("connect", () => {
  // const messageC = { path: "Characters" }; //! MUESTRA TODOS LOS CHARACTERS DE LA FC MODEL GETALLCHARACTERS()
  // const messageC = { path: "Continents" };//! MUESTRA TODOS LOS CONTINENTS DE LA FC MODEL GETALLCONTINENTS()
  const messageC = { path: "Character/4" }; //! MUESTRA EL CHARACTER CON ID

  const response = JSON.stringify(messageC);
  client.write(response);
});

client.on("data", (serverMsg) => {
  const messageS = serverMsg.toString(); //.toString();
  const parsedMessage = JSON.parse(messageS);
  console.log(parsedMessage);
  client.end();
});
