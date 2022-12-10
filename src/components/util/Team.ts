class Team
{
    name;//team name
    buzz = false;
    memberList = [
        {player: null},
        {player: null},
        {player: null},
        {player: null}
    ];

    constructor(name, player1, player2, player3, player4) {
        this.name = name;
        this.memberList[0].player = player1
        this.memberList[1].player = player2
        this.memberList[2].player = player3
        this.memberList[3].player = player4
    }
    
    addPlayer(player, idx) {
        this.memberList[idx] = player;
    }

    buzzPlayer() {
        
    }

    getPlayerId(id) {
        return this.id;
    }

    
}