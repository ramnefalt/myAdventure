import { Adventure } from '../interfaces/adventure'
import { sceneNames } from './scenes';

export const myAdventure : Adventure = {
  title: "A strange journey",
  gameState: {
    currentSceneId: sceneNames.corridor
  },
  scenes: {
    corridor: {
      title: "A dark hallway",
      imgUrl: "http://pilotproject.org/images/2.bp.blogspot.com/-P5wCXKtUVsw/TqHPKNrTWuI/AAAAAAAAA-I/xeHwtsVj9VU/s1600/RLD.scary+door.JPG",
      desc: "The corridor extends into eternity in front of you. A few meters down a heavy oak door is set in the left wall.",
      userAction: [{
        action: "Open the door",
        goToSceneId: sceneNames.door
      }, {
        action: "Walk down the corridor",
        goToSceneId: sceneNames.downTheCorridor
      }, {
        action: "Turn back",
        goToSceneId: sceneNames.turnBack
      }]
    },
    door: {
      title: "You open the door",
      imgUrl: "https://www.checkbca.org/images/media/creepy_door.jpg",
      desc: "The corridor extends into eternity in front of you. A few meters down a heavy oak door is set in the left wall.",
      userAction: [{
        action: "Open the door",
        goToSceneId: sceneNames.door
      }, {
        action: "Walk down the corridor",
        goToSceneId: sceneNames.downTheCorridor
      }, {
        action: "Turn back",
        goToSceneId: sceneNames.turnBack
      }]
    },
    downTheCorridor: {
      title: "You walk down the corridor...",
      imgUrl: "https://i.ytimg.com/vi/mjHmfIh5slA/maxresdefault.jpg",
      desc: "The corridor extends into eternity in front of you. A few meters down a heavy oak door is set in the left wall.",
      userAction: [{
        action: "Open the door",
        goToSceneId: sceneNames.door
      }, {
        action: "Walk down the corridor",
        goToSceneId: sceneNames.downTheCorridor
      }, {
        action: "Turn back",
        goToSceneId: sceneNames.turnBack
      }]
    },
    turnBack: {
      title: "You walk down the corridor...",
      imgUrl: "https://img0.etsystatic.com/062/2/9923777/il_340x270.790046754_owr1.jpg",
      desc: "Dead",
      userAction: [{
        action: "Play again?",
        goToSceneId: sceneNames.corridor
      }]
    }
  }
}