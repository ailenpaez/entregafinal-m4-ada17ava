import { getAllData } from "../database/database";
import fs from "fs";
import path from "path"; //!para guardar

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
    const result = Characters; // { data: Characters, message: Messages.OK };
    await saveHistory("Getting all the characters -> ⚔️", result);
    // console.log(result);

    return result;
  }

  async getAllContinents() {
    const Continents = await getAllData("Continents");
    const result = Continents; // { data: Continents, message: Messages.OK };
    await saveHistory("Getting all the continents -> 🗺️", result);
    return result;
  }
}

const modelData = new GotModel();

const { getAllCharacters, getAllContinents } = modelData;
export { getAllCharacters, getAllContinents };
