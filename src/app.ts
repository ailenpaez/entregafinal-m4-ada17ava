import { allCharacters, allContinents } from "./controller/controller";

import { Messages } from "./utils/messages";

export async function endpoint(msg) {
  const clientMsg = msg.toString();
  const parsedData = JSON.parse(clientMsg);

  if (parsedData.path == "Characters") {
    const data = await allCharacters();
    const parsedChar = JSON.stringify(data);

    return parsedChar;
  } else if (parsedData.path == "Continents") {
    const data = await allContinents();
    const parsedBook = JSON.stringify(data);
    return parsedBook;
  } else {
    const msgAlert = JSON.stringify(Messages.BAD_REQUEST);
    return msgAlert;
  }
}
