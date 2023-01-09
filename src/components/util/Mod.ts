import User from "./User";

class Mod extends User {
    roomCode: string;

    constructor(code: string, name: string, id: string) {
        super(name, id);
        this.roomCode = code;
    }

    getRoomCode(){
        return this.roomCode;
    }
    getIsMod() {
        return true;
    }
}

export default Mod;