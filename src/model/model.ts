import { getAllData } from "../database/database";
import { Messages } from "../utils/messages";

class HPModel {
  async getAllCharacters() {
    // const {characters} = await getAllData("characters");
    // return characters

    try {
      const result = await getAllData("characters");
      const { characters } = result;

      return { message: Messages.OK, data: result };
    } catch (error) {
      return {
        message: Messages.BAD_REQUEST,
        error: error.message,
      };
    }
  }

  async getAllBooks() {
    try {
      const result = await getAllData("books");
      const { books } = result;
      return { message: Messages.OK, data: result };
    } catch (error) {
      return {
        message: Messages.BAD_REQUEST,
        error: error.message,
      };
    }
  }

  async getAllSpells() {
    try {
      const result = await getAllData("spells");
      const { spells } = result;
      return { message: Messages.OK, data: result };
    } catch (error) {
      return {
        message: Messages.BAD_REQUEST,
        error: error.message,
      };
    }
  }

  async getAllMovies() {
    try {
      const result = await getAllData("movies");
      const { movies } = result;
      return { message: Messages.OK, data: result };
    } catch (error) {
      return {
        message: Messages.BAD_REQUEST,
        error: error.message,
      };
    }
  }
}

const modelData = new HPModel();

const { getAllCharacters, getAllBooks, getAllSpells, getAllMovies } = modelData;
export { getAllCharacters, getAllBooks, getAllSpells, getAllMovies };
