import { getAllData } from "../database/database";
import fs from "fs";
import path from "path";
import { Messages } from "../utils/messages";

const historyFile = path.resolve(__dirname, "../database/history.json");

const saveHistory = async (usedMethod: string, result: any) => {
  try {
    let history = [];

    if (fs.existsSync(historyFile)) {
      const fileContent = fs.readFileSync(historyFile, "utf-8");
      history = JSON.parse(fileContent);
    }
    history.push({ method: usedMethod, result });
    fs.writeFileSync(historyFile, JSON.stringify(history));
  } catch (error) {
    console.error("ERROR!_HISTORY_FAILED:", error);
  }
};

class GotModel {
  async getAllCharacters() {
    const Characters = await getAllData("Characters");
    const result = Characters;
    await saveHistory("Getting all the characters -> ⚔️", result);

    return result;
  }

  async getAllContinents() {
    const Continents = await getAllData("Continents");
    const result = Continents;
    await saveHistory("Getting all the continents -> 🗺️", result);
    return result;
  }

  async getCharacterById(id: number) {
    const Characters = await getAllData("Characters");
    const character = Characters.find((char: any) => char.id === id);
    const result = character || Messages.NOT_FOUND;
    await saveHistory(`Getting character with ID -> ⚔️ ${id} `, result);
    return result;
  }
  
  async getContinentById(id: number) {
    const Continents = await getAllData("Continents");
    const continent = Continents.find((cont: any) => cont.id === id);
    const result = continent || "Continent not found";
    await saveHistory(`Getting continent with ID -> 🗺️ ${id} `, result);
    return result;
  }
}

const modelData = new GotModel();

const {
  getAllCharacters,
  getAllContinents,
  getCharacterById,
  getContinentById,
} = modelData;
export {
  getAllCharacters,
  getAllContinents,
  getCharacterById,
  getContinentById,
};
