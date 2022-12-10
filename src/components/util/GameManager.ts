import Player from "./Player";

class GameManager {

    code: string;

    constructor() {
      this.code = this.randomCode()
    }
    createPlayer(name: string) {
        return new Player(name);
    }

    createMod() {
        return new Mod();
    }

    startGame() {
        this.code = this.randomCode();
        //mod = this.createMod();
    }

    getCode() {
      return this.code;
    }

    test() {
        console.log('success');
    }

    randomCode = () => {
        let allCharNum = '0123456789QWERTYUIOPASDFGHJKLZXCVBNM';// length = 36, index 0 to 35
        let roomCode = '';
        let tempIndex = 0;
        for (let i = 0; i < 6; i++) {
            tempIndex = (Math.random() * 36);
            roomCode += allCharNum.substring(tempIndex, tempIndex + 1);
        }
        let a = Math.random*10000;
        if(a == 876){
            roomCode += "√";
        }
        document.querySelector("#GCode")
        this.code = roomCode;
        return roomCode;
    }
}

export default GameManager;