import { Component, Input, Output, EventEmitter } from '@angular/core';
import { sceneNames } from '../src/constants/scenes';
import { UserAction } from './interfaces/userAction';
import { Scene } from './interfaces/scene';

@Component({
  selector: 'scene',
  template: `
    <h2>{{currentScene.title}}</h2>
    <img src="{{currentScene.imgUrl}}" />
    <p>{{currentScene.desc}}<p>
    <ul>
      <li *ngFor="let action of currentScene.userAction"><a (click)="changeScene(action)">{{action.action}}</a></li>
    </ul>
  `,
  styles: [
    'img {max-width: 250px; max-height: 200px;}',
    'li {cursor: pointer; user-select: none;}',
    'li:hover {background-color: aquamarine;}'
  ]
})
export class SceneComponent {

  constructor() { }

  currentScene = null;

  @Input() set scene(scene: Scene) {
    this.currentScene = scene;
  }

  @Output() goToScene = new EventEmitter<sceneNames>()

  changeScene(action:UserAction) {
    this.goToScene.emit(action.goToSceneId);
  }
}