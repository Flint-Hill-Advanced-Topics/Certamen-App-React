import Player from "./Player";
import Mod from "./Mod";

class GameManager {

    code: string = '';
    mod: Mod;

    playerList = [];
    teamList = [];

    constructor(code = localStorage.getItem("code")) {
      this.startGame();
      if(code !== '' && code !== null) this.code = code;
      localStorage.setItem("code", this.code);
      this.mod = this.createMod(this.randomCode());
    }
  
    createPlayer(name: string, id: string) {
        return new Player(name, id);
    }

    createMod(id: string) {
        return new Mod(this.code, 'Mod', id);
    }

    async startGame() {
        this.code = this.randomCode();
    }

    getCode() {
      return this.code;
    }

    regenerateCode() {
      this.code = this.randomCode();
      localStorage.setItem("code", this.code);
    }

    randomCode = () => {
        let allCharNum = '0123456789QWERTYUIOPASDFGHJKLZXCVBNM';// length = 36, index 0 to 35
        let roomCode = '';
        let tempIndex = 0;
        for (let i = 0; i < 6; i++) {
            tempIndex = (Math.random() * 36);
            roomCode += allCharNum.substring(tempIndex, tempIndex + 1);
        }
        if(Math.random()*10000 == 876){
            roomCode += "√";
        }
        return roomCode;
    }
}

export default GameManager;