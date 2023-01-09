import React from "react";
import Dropdown from "../../UI/Dropdown";
import styles from "./PlayerList.module.css";


const PlayerList = () => {
  
  const playerList = [
    {
      team: "Unchosen",
      players: ["Player 1", "Player 2", "Player 3", "Player 4"],
    },
    {
      team: "Team A",
      players: ["Player 1", "Player 2", "Player 3", "Player 4"],
    },
    {
      team: "Team B",
      players: ["Player 5", "Player 6", "Player 7", "Player 8"],
    },
    {
      team: "Team C",
      players: ["Player 9", "Player 10", "Player 11", "Player 12"],
    },
    {
    team: "Team D",
      players: ["Player 13", "Player 14", "Player 15", "Player 16"],
    },
  ];
  
  
  return (
    <>
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
    </>
  );
};

export default PlayerList;