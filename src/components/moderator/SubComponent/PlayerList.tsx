import React, { createContext, useContext, useMemo, useState } from "react";
import Dropdown from "../../UI/Dropdown";
import styles from "./PlayerList.module.css";

const PlayerList = () => {
  
  const playerList = [
    {
      team: "Team 1",
      players: ["Player 1", "Player 2", "Player 3", "Player 4"],
    },
    {
      team: "Team 2",
      players: ["Player 5", "Player 6", "Player 7", "Player 8"],
    },
  ];
  
  const dropdownContext = createContext(null);
  
  return (
    <dropdownContext.Provider value={null}>
      {
        playerList.map(
          (el: any) => (
            <Dropdown className={styles.dropDown} key={el.team} title={el.team} titleStyle={styles.teamTitle}>
              {
                el.players.map(
                  (player: any) => (
                    <Dropdown key={player} title={player} titleStyle={styles.players}>
                      Extra Dropdowns to select team
                    </Dropdown>
                  )
                )
              }
            </Dropdown>
          )
        )
      }
      </dropdownContext.Provider>
  );
};

export default PlayerList;