import json from './parser';
import read from './reader';
import GameSaving from './gameSaving';

export default class GameSavingLoader {
  static async load() {
    const data = await read();
    const value = await json(data);
    return new GameSaving(JSON.parse(value));
  }
}
