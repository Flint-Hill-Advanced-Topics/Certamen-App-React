import React, { useState } from 'react';
import GameManager from "../util/GameManager";

const GameContext = React.createContext({
  manager: new GameManager(),
  teamList: {},
  playerList: {},
});

const GameProvider = (props: React.PropsWithChildren) => {
  
  const [manager] = useState(new GameManager(localStorage.getItem("code")));
  const [playerList, setPlayerList] = useState({});
  const [teamList, setTeamList] = useState({});
  
  return (
    <GameContext.Provider value={{
      manager: manager,
    }}>
      {props.children}
    </GameContext.Provider>
  );
}

export default GameContext

export {GameProvider}