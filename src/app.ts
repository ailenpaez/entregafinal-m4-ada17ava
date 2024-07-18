import {
  allCharacters,
  allBooks,
  allSpells,
  allMovies,
} from "./controller/controller";

import { Messages } from "./utils/messages";

export async function endpoint(msg) {
  const clientMsg = msg.toString();
  const parsedData = JSON.parse(clientMsg);

  if (parsedData.path == "characters") {
    const data = await allCharacters();
    const parsedChar = JSON.stringify(data);

    return parsedChar;
  } else if (parsedData.path == "books") {
    const data = await allBooks();
    const parsedBook = JSON.stringify(data);
    return parsedBook;
  } else if (parsedData.path == "spells") {
    const data = await allSpells();
    const parsedSpell = JSON.stringify(data);
    return parsedSpell;
  } else if (parsedData.path == "movies") {
    const data = await allMovies();
    const parsedMovies = JSON.stringify(data);
    return parsedMovies;
  } else {
    const msgAlert = JSON.stringify(Messages.BAD_REQUEST);
    return msgAlert;
  }
}
