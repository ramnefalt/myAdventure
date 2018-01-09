import { Component } from '@angular/core';
import { GameState } from './interfaces/gameState';
import { myAdventure } from './constants/data';
import { StateHandler } from './services/stateHandler';
import { Scene } from './interfaces/scene';
import { sceneNames } from './constants/scenes';

@Component({
  selector: 'app',
  template: `
    <h1>{{adventure.title}}</h1>
    <scene (goToScene)="goToScene($event)" [scene]="scene"></scene>
  `,
  styles: [
    'img {max-width: 250px; max-height: 200px;}',
    'li {cursor: pointer; user-select: none;}',
    'li:hover {background-color: aquamarine;}'
  ]
})
export class AppComponent {

  private gameState: GameState;
  adventure = myAdventure;

  constructor(public stateHandler:StateHandler) {
    stateHandler.listen(state => { 
      this.gameState = state;
    });
  }

  get scene() : Scene {
    return this.adventure.scenes[this.gameState.currentSceneId];
  }

  hasUserAction() : boolean {
    return this.scene.userAction.length > 0;
  }

  goToScene(sceneName:sceneNames) : void {
    this.stateHandler.update({...this.gameState, currentSceneId: sceneName});
  }
}
