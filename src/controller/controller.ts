import {
  getAllCharacters,
  getAllContinents
} from "../model/model";

class GotController {
  async getAllCharacters() {
    return await getAllCharacters();
  }

  async getAllContinents(){
    return await getAllContinents()
  }

}

const controllerData = new GotController();

const {
  getAllCharacters: allCharacters,
  getAllContinents: allContinents
} = controllerData;

export { allCharacters,allContinents};
