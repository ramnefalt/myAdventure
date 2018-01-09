import { sceneNames } from "../constants/scenes";

export interface UserAction {
    action : string,
    goToSceneId : sceneNames
}