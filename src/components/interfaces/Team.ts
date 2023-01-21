import Player from "../util/Player";

interface Team {
    name: string,
    id: string,
    players: Player[],
    score: number[],
}

export default Team;