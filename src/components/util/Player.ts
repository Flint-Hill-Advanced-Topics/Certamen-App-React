import User from "./User";

class Player extends User {
    name = "";
    team = "";
    id = "";


    constructor(name: string){
        super(name,"asd");
        this.name = name;
    }

    set setTeam(team: string) {
        this.team = team;
    }

    get getName(){
        return this.name;
    }

    get isMod() { 
        return false;
    }
    
    get getTeam() {
        return this.team;
    }
}

export default Player;