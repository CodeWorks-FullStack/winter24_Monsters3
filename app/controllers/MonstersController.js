import { AppState } from "../AppState.js";
import { monstersService } from "../services/MonstersService.js";


export class MonstersController {
  constructor() {
    console.log('👺🎮');
    AppState.on('monsters', this.drawMonsters) // setup listener for WHEN monsters are added to appstate, then draw
    this.fetchMonsters()
    // this.drawMonsters() this doesn't work cause we still have to wait for the monsters to get here
  }

  async fetchMonsters() {
    await monstersService.fetchMonster()
    // this.drawMonsters() but we also don't really call draws anymore
  }

  drawMonsters() {
    console.log('✏️👺');
    const monsterListElm = document.getElementById('monster-list')
    monsterListElm.innerHTML = ''
    // AppState.monsters.forEach(monster => monsterListElm.innerHTML += monster.name) start small then move to template
    AppState.monsters.forEach(monster => monsterListElm.innerHTML += monster.Card)
  }
}