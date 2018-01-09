import {Scene} from './scene'
import {GameState} from './gameState'

export interface Adventure {
    title: string,
    gameState: GameState,
    scenes: {
      [index: string]: Scene
    }
  }