class Mod extends User {
    roomCode = '';

    constructor() {
        this.roodCode = randomCode();
    }

    get roomCode(){
        return this.roomCode;
    }
    get isMod() {
        return true;
    }
}