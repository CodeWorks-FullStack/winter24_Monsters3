import { Monster } from './models/Monster.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {


  /** @type {Monster[]} starts empty but is typed so we can have intellisense  */
  monsters = []

}

export const AppState = createObservableProxy(new ObservableAppState())