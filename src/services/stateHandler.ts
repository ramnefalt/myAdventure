import { Injectable } from "@angular/core";
import { GameState } from "../interfaces/gameState";
import { myAdventure } from "../constants/data";


@Injectable()
export class StateHandler {
    private listeners = new Array();
    gameState: GameState = {...myAdventure.gameState};

    listen(callback:Function) {
        this.listeners.push(callback);
        callback(this.gameState);
    }

    update(newGameState: GameState) {
        this.gameState = newGameState;
        this.listeners.forEach(callback=> callback(newGameState));
    }
}