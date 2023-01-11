import React, { useEffect, useState, useMemo, useCallback } from 'react';
import GameManager from "../util/GameManager";
import DB from "../../../Config"
import { getDatabase, ref, update, get, set, remove } from "firebase/database";

const GameContext = React.createContext({
  manager: new GameManager(),
  code: '',
  teamList: {},
  playerList: {},
  updatePlayer: (player) => {}, // maybe not necessary
  updateTeam: (team) => {}, //maybe not necessary
  onRegenerateCode: () => {},
});

const samplePlayerObject = {
  team: 'teamname',
  id: 'id',
  name: 'name',
};

const sampleTeamObject = {
  teamid: {
    name: 'name',
    id: 'id',
    players: [],
  },
};

const GameProvider = (props: React.PropsWithChildren) => {
  
  const [manager] = useState(new GameManager(localStorage.getItem("code")));
  const [code, setCode] = useState(manager.getCode());
  const [playerList, setPlayerList] = useState({}!);
  const [teamList, setTeamList] = useState({}!);
  const dbRef = useMemo(() => ref(DB,'games/' + manager.getCode()), [code]);
  const testRef = useMemo(() => ref(DB,'games/'), [code]);
  const test = useMemo(() => {
    console.log("code changed!!!!");
    return "";
  }, []);

  useEffect(() => {
    get(dbRef)
      .then((snapshot) => {
        if(!snapshot.exists()) {
          set(dbRef, {
            id: code,
            playerList: playerList,
            teamList: teamList,
          });
        } else {
          console.log(snapshot.val());
        }
      })
      .catch((err) => {
        console.error(err);
      });

    // get(dbRef)
    //   .then((snapshot) => {
    //     setTeamList(snapshot.val().teamList);
    //     setPlayerList(snapshot.val().playerList);
    //   });
    
  }, [code]);

  const updateDB = () => {
    update(dbRef, {
      id: code,
      playerList: playerList,
      teamList: teamList,
    })
  };

  const onRegenrateCode = () => {
    manager.regenerateCode();
    //ensuring the function is called before dbRef is changed
    remove.call(null, dbRef);
    setCode(manager.getCode());
  }

  const onPlayerUpdate = (player) => {
    setPlayerList((prevState) => {
      const updatedList = {...prevState, [player.id]: player};
    });
  };
  
  const onTeamUpdate = (team) => {
    
  };
  
  return (
    <GameContext.Provider value={{
      manager: manager,
      code: code,
      teamList: teamList,
      playerList: playerList,
      updatePlayer: onPlayerUpdate,
      updateTeam: onTeamUpdate,
      onRegenerateCode: onRegenrateCode,
    }}>
      {props.children}
    </GameContext.Provider>
  );
}

export default GameContext

export {GameProvider}