import { getAllData } from "../database/database";
import { Messages } from "../utils/messages";

class GotModel {
  async getAllCharacters() {
    const Characters = await getAllData("Characters");
    return Characters;
  }

  async getAllContinents() {
    const Continents = await getAllData("Continents");
    return Continents;
  }
}

// class GotModel {
//   async getAllCharacters() {
//       const result = await getAllData("Characters");
//       const { Characters } = result;
//       console.log(result);
//     }
//   }

const modelData = new GotModel();

const { getAllCharacters, getAllContinents } = modelData;
export { getAllCharacters, getAllContinents };

// const { getAllCharacters, getAllBooks, getAllSpells, getAllMovies } = modelData;
// export { getAllCharacters, getAllBooks, getAllSpells, getAllMovies };
