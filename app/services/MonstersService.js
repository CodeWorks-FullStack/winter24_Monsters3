import { AppState } from "../AppState.js";
import { Monster } from "../models/Monster.js";


class MonstersService {
  async fetchMonster() {
    console.time('fetching');
    let response = await fetch('https://botw-compendium.herokuapp.com/api/v3/compendium/category/monsters')
    console.log('2- response', response);
    let data = await response.json()
    console.log('3- data', data);
    const monsters = data.data.map(monsterData => new Monster(monsterData))
    console.log('👺👺', monsters);
    console.timeEnd('fetching')
    AppState.monsters = monsters
  }
}

export const monstersService = new MonstersService()