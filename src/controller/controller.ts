import {
  getAllCharacters,
  getAllContinents,
  getCharacterById,
} from "../model/model";

import { Messages } from "../utils/messages";

class GotController {
  async getAllCharacters() {
    const result = await getAllCharacters();
    return { data: result, message: Messages.OK };
  }

  async getAllContinents() {
    const result = await getAllContinents();
    return { data: result, message: Messages.OK };
  }

  async getCharacterById(id: number) {
    if (typeof id !== "number") {
      return { data: null, message: Messages.BAD_REQUEST };
    }

    const result = await getCharacterById(id);
    if (!result) {
      return { data: null, message: Messages.NOT_FOUND };
    }

    return { data: result, message: Messages.OK };
  }
}

const controllerData = new GotController();

const {
  getAllCharacters: allCharacters,
  getAllContinents: allContinents,
  getCharacterById: characterById,
} = controllerData;

export { allCharacters, allContinents, characterById };
