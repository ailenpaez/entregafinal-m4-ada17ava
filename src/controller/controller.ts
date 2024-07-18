import {
  getAllBooks,
  getAllCharacters,
  getAllSpells,
  getAllMovies,
} from "../model/model";
import { Messages } from "../utils/messages";

class HPController {
  async getAllCharacters() {
    return await getAllCharacters();
  }

  async getAllBooks() {
    return await getAllBooks();
  }

  async getAllSpells() {
    return await getAllSpells();
  }

  async getAllMovies() {
    return await getAllMovies();
  }
}

const controllerData = new HPController();

const {
  getAllCharacters: allCharacters,
  getAllBooks: allBooks,
  getAllSpells: allSpells,
  getAllMovies: allMovies,
} = controllerData;

export { allCharacters, allBooks, allSpells, allMovies };
