import { getAllData } from "../database/database";
import { Messages } from "../utils/messages";

class GotModel {
  
  async getAllCharacters() {
    try {
      const Characters = await getAllData("Characters");
      return { data: Characters, message: Messages.OK };
    } catch (error) {
      console.error(error);
      return { message: Messages.BAD_REQUEST };
    }
  }

  async getAllContinents() {
    try {
      const Continents = await getAllData("Continents");
      return { data: Continents, message: Messages.OK };
    } catch (error) {
      console.error(error);
      return { message: Messages.NOT_FOUND };
    }
  }
}

const modelData = new GotModel();

const { getAllCharacters, getAllContinents } = modelData;
export { getAllCharacters, getAllContinents };
